import type {
  ErrorResponsePayloadWithErrMessage,
  ErrorResponsePayloadWithErrorBoolean,
  GetFileQueryParams,
  GetFileResponse,
  GetFileVersionsResponse,
  GetImagesQueryParams,
  GetImagesResponse,
  GetFileComponentsResponse,
  GetFileComponentSetsResponse,
  Version,
} from '@figma/rest-api-spec'

export type Ok<T> = {
  error: null
  data: T
}

export type Err = {
  error: { statusCode: number; message: string }
  data: null
}

export type Result<T> = Ok<T> | Err

export function createClient(accessToken: string) {
  async function getLatestRelease(fileKey: string): Promise<Result<Version>> {
    let version: Version | undefined
    let query: URLSearchParams | undefined

    while (!version) {
      const { error, data }: Result<GetFileVersionsResponse> = await get(
        `/v1/files/${fileKey}/versions`,
        query,
      )
      if (error) {
        return { error, data }
      }
      const published = data.versions.find((v) => v.label === 'Components published')
      if (published) {
        version = published
      } else if (data.pagination.next_page) {
        query = new URL(data.pagination.next_page).searchParams
      } else {
        throw new Error('No release found!')
      }
    }

    return { error: null, data: version }
  }

  async function getFile(fileKey: string, params: GetFileQueryParams) {
    return get<GetFileResponse>(`/v1/files/${fileKey}`, params)
  }

  async function getFileComponents(fileKey: string) {
    return get<GetFileComponentsResponse>(`/v1/files/${fileKey}/components`)
  }

  async function getFileComponentSets(fileKey: string) {
    return get<GetFileComponentSetsResponse>(`/v1/files/${fileKey}/component_sets`)
  }

  async function getImageUrls(fileKey: string, params: GetImagesQueryParams) {
    if (Object.hasOwn(params, 'version') && params.version === undefined) {
      delete params.version
    }
    return get<GetImagesResponse>(`/v1/images/${fileKey}`, params)
  }

  async function get<T>(
    path: string,
    query: URLSearchParams | Record<string, unknown> = {},
  ): Promise<Ok<T> | Err> {
    const url = new URL(path, 'https://api.figma.com')
    if (query instanceof URLSearchParams) {
      query = Object.fromEntries(query.entries())
    }
    for (const [key, value] of Object.entries(query)) {
      url.searchParams.set(key, String(value))
    }

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'x-figma-token': accessToken,
      },
    })

    if (res.ok) {
      return { error: null, data: await res.json() }
    }

    const json = (await res.json()) as
      | ErrorResponsePayloadWithErrorBoolean
      | ErrorResponsePayloadWithErrMessage

    return {
      error: { statusCode: res.status, message: extractErrorMessage(json) },
      data: null,
    }
  }

  return {
    accessToken,
    getLatestRelease,
    getFile,
    getFileComponents,
    getFileComponentSets,
    getImageUrls,
  }
}

function extractErrorMessage(
  json: ErrorResponsePayloadWithErrorBoolean | ErrorResponsePayloadWithErrMessage,
): string {
  if ('err' in json && typeof json.err === 'string') {
    return json.err
  } else if ('error' in json && typeof json.error === 'string') {
    return json.error
  } else {
    return 'Unknown error'
  }
}
