package no.nrk.core.icons

import androidx.compose.runtime.Composable
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.res.painterResource

// Warning: This is an autogenerated file. Please do not edit it manually

val LocalUseExpressiveIcons = staticCompositionLocalOf<Boolean> {
	error("LocalUseExpressiveIcons not found")
}

data class NrkIcon(
	val normal: Int,
	val expressive: Int
) {
	@Composable
	fun asPainter(): Painter {
		return painterResource(
			id = if (LocalUseExpressiveIcons.current) {
				expressive
			} else {
				normal
			}
		)
	}
}

object NrkIcons {
	val Nrk360 = NrkIcon(
		normal = R.drawable.nrk_360,
		expressive = R.drawable.nrk_360_expressive
	)

	val Nrk404 = NrkIcon(
		normal = R.drawable.nrk_404,
		expressive = R.drawable.nrk_404_expressive
	)

	val NrkAlarmClock = NrkIcon(
		normal = R.drawable.nrk_alarm_clock,
		expressive = R.drawable.nrk_alarm_clock_expressive
	)

	val NrkArrangeList = NrkIcon(
		normal = R.drawable.nrk_arrange_list,
		expressive = R.drawable.nrk_arrange_list_expressive
	)

	val NrkArrowDown = NrkIcon(
		normal = R.drawable.nrk_arrow_down,
		expressive = R.drawable.nrk_arrow_down_expressive
	)

	val NrkArrowDropdown = NrkIcon(
		normal = R.drawable.nrk_arrow_dropdown,
		expressive = R.drawable.nrk_arrow_dropdown_expressive
	)

	val NrkArrowLeft = NrkIcon(
		normal = R.drawable.nrk_arrow_left,
		expressive = R.drawable.nrk_arrow_left_expressive
	)

	val NrkArrowLeftLong = NrkIcon(
		normal = R.drawable.nrk_arrow_left_long,
		expressive = R.drawable.nrk_arrow_left_long_expressive
	)

	val NrkArrowNested = NrkIcon(
		normal = R.drawable.nrk_arrow_nested,
		expressive = R.drawable.nrk_arrow_nested_expressive
	)

	val NrkArrowRight = NrkIcon(
		normal = R.drawable.nrk_arrow_right,
		expressive = R.drawable.nrk_arrow_right_expressive
	)

	val NrkArrowRightLong = NrkIcon(
		normal = R.drawable.nrk_arrow_right_long,
		expressive = R.drawable.nrk_arrow_right_long_expressive
	)

	val NrkArrowUp = NrkIcon(
		normal = R.drawable.nrk_arrow_up,
		expressive = R.drawable.nrk_arrow_up_expressive
	)

	val NrkArticle = NrkIcon(
		normal = R.drawable.nrk_article,
		expressive = R.drawable.nrk_article_expressive
	)

	val NrkBack = NrkIcon(
		normal = R.drawable.nrk_back,
		expressive = R.drawable.nrk_back_expressive
	)

	val NrkBell = NrkIcon(
		normal = R.drawable.nrk_bell,
		expressive = R.drawable.nrk_bell_expressive
	)

	val NrkBookmark = NrkIcon(
		normal = R.drawable.nrk_bookmark,
		expressive = R.drawable.nrk_bookmark_expressive
	)

	val NrkBroadcast = NrkIcon(
		normal = R.drawable.nrk_broadcast,
		expressive = R.drawable.nrk_broadcast_expressive
	)

	val NrkBulletedList = NrkIcon(
		normal = R.drawable.nrk_bulleted_list,
		expressive = R.drawable.nrk_bulleted_list_expressive
	)

	val NrkBulletSquare = NrkIcon(
		normal = R.drawable.nrk_bullet_square,
		expressive = R.drawable.nrk_bullet_square_expressive
	)

	val NrkCalendar = NrkIcon(
		normal = R.drawable.nrk_calendar,
		expressive = R.drawable.nrk_calendar_expressive
	)

	val NrkCategory = NrkIcon(
		normal = R.drawable.nrk_category,
		expressive = R.drawable.nrk_category_expressive
	)

	val NrkCheckbox = NrkIcon(
		normal = R.drawable.nrk_checkbox,
		expressive = R.drawable.nrk_checkbox_expressive
	)

	val NrkCheck = NrkIcon(
		normal = R.drawable.nrk_check,
		expressive = R.drawable.nrk_check_expressive
	)

	val NrkChevronDown = NrkIcon(
		normal = R.drawable.nrk_chevron_down,
		expressive = R.drawable.nrk_chevron_down_expressive
	)

	val NrkChevronLeft = NrkIcon(
		normal = R.drawable.nrk_chevron_left,
		expressive = R.drawable.nrk_chevron_left_expressive
	)

	val NrkChevronRight = NrkIcon(
		normal = R.drawable.nrk_chevron_right,
		expressive = R.drawable.nrk_chevron_right_expressive
	)

	val NrkChevronUp = NrkIcon(
		normal = R.drawable.nrk_chevron_up,
		expressive = R.drawable.nrk_chevron_up_expressive
	)

	val NrkClock = NrkIcon(
		normal = R.drawable.nrk_clock,
		expressive = R.drawable.nrk_clock_expressive
	)

	val NrkClose = NrkIcon(
		normal = R.drawable.nrk_close,
		expressive = R.drawable.nrk_close_expressive
	)

	val NrkComment = NrkIcon(
		normal = R.drawable.nrk_comment,
		expressive = R.drawable.nrk_comment_expressive
	)

	val NrkDialogue = NrkIcon(
		normal = R.drawable.nrk_dialogue,
		expressive = R.drawable.nrk_dialogue_expressive
	)

	val NrkDownloaded = NrkIcon(
		normal = R.drawable.nrk_downloaded,
		expressive = R.drawable.nrk_downloaded_expressive
	)

	val NrkDownload = NrkIcon(
		normal = R.drawable.nrk_download,
		expressive = R.drawable.nrk_download_expressive
	)

	val NrkDuration = NrkIcon(
		normal = R.drawable.nrk_duration,
		expressive = R.drawable.nrk_duration_expressive
	)

	val NrkEdit = NrkIcon(
		normal = R.drawable.nrk_edit,
		expressive = R.drawable.nrk_edit_expressive
	)

	val NrkEllipsis = NrkIcon(
		normal = R.drawable.nrk_ellipsis,
		expressive = R.drawable.nrk_ellipsis_expressive
	)

	val NrkFullscreen = NrkIcon(
		normal = R.drawable.nrk_fullscreen,
		expressive = R.drawable.nrk_fullscreen_expressive
	)

	val NrkGallery = NrkIcon(
		normal = R.drawable.nrk_gallery,
		expressive = R.drawable.nrk_gallery_expressive
	)

	val NrkGeopoint = NrkIcon(
		normal = R.drawable.nrk_geopoint,
		expressive = R.drawable.nrk_geopoint_expressive
	)

	val NrkGeo = NrkIcon(
		normal = R.drawable.nrk_geo,
		expressive = R.drawable.nrk_geo_expressive
	)

	val NrkGlobe = NrkIcon(
		normal = R.drawable.nrk_globe,
		expressive = R.drawable.nrk_globe_expressive
	)

	val NrkHardwareCamera = NrkIcon(
		normal = R.drawable.nrk_hardware_camera,
		expressive = R.drawable.nrk_hardware_camera_expressive
	)

	val NrkHardwareComputer = NrkIcon(
		normal = R.drawable.nrk_hardware_computer,
		expressive = R.drawable.nrk_hardware_computer_expressive
	)

	val NrkHardwareGame = NrkIcon(
		normal = R.drawable.nrk_hardware_game,
		expressive = R.drawable.nrk_hardware_game_expressive
	)

	val NrkHardwareHeadphones = NrkIcon(
		normal = R.drawable.nrk_hardware_headphones,
		expressive = R.drawable.nrk_hardware_headphones_expressive
	)

	val NrkHardwareLaptop = NrkIcon(
		normal = R.drawable.nrk_hardware_laptop,
		expressive = R.drawable.nrk_hardware_laptop_expressive
	)

	val NrkHardwareMicrophone = NrkIcon(
		normal = R.drawable.nrk_hardware_microphone,
		expressive = R.drawable.nrk_hardware_microphone_expressive
	)

	val NrkHardwarePrinter = NrkIcon(
		normal = R.drawable.nrk_hardware_printer,
		expressive = R.drawable.nrk_hardware_printer_expressive
	)

	val NrkHardwareRadio = NrkIcon(
		normal = R.drawable.nrk_hardware_radio,
		expressive = R.drawable.nrk_hardware_radio_expressive
	)

	val NrkHardwareSmartSpeaker = NrkIcon(
		normal = R.drawable.nrk_hardware_smart_speaker,
		expressive = R.drawable.nrk_hardware_smart_speaker_expressive
	)

	val NrkHardwareSmartWatch = NrkIcon(
		normal = R.drawable.nrk_hardware_smart_watch,
		expressive = R.drawable.nrk_hardware_smart_watch_expressive
	)

	val NrkHardwareSpeaker = NrkIcon(
		normal = R.drawable.nrk_hardware_speaker,
		expressive = R.drawable.nrk_hardware_speaker_expressive
	)

	val NrkHardwareTablet = NrkIcon(
		normal = R.drawable.nrk_hardware_tablet,
		expressive = R.drawable.nrk_hardware_tablet_expressive
	)

	val NrkHardwareTv = NrkIcon(
		normal = R.drawable.nrk_hardware_tv,
		expressive = R.drawable.nrk_hardware_tv_expressive
	)

	val NrkHardwareWatch = NrkIcon(
		normal = R.drawable.nrk_hardware_watch,
		expressive = R.drawable.nrk_hardware_watch_expressive
	)

	val NrkHeart = NrkIcon(
		normal = R.drawable.nrk_heart,
		expressive = R.drawable.nrk_heart_expressive
	)

	val NrkHelp = NrkIcon(
		normal = R.drawable.nrk_help,
		expressive = R.drawable.nrk_help_expressive
	)

	val NrkHome = NrkIcon(
		normal = R.drawable.nrk_home,
		expressive = R.drawable.nrk_home_expressive
	)

	val NrkInfo = NrkIcon(
		normal = R.drawable.nrk_info,
		expressive = R.drawable.nrk_info_expressive
	)

	val NrkLatestNews = NrkIcon(
		normal = R.drawable.nrk_latest_news,
		expressive = R.drawable.nrk_latest_news_expressive
	)

	val NrkLink = NrkIcon(
		normal = R.drawable.nrk_link,
		expressive = R.drawable.nrk_link_expressive
	)

	val NrkList = NrkIcon(
		normal = R.drawable.nrk_list,
		expressive = R.drawable.nrk_list_expressive
	)

	val NrkLock = NrkIcon(
		normal = R.drawable.nrk_lock,
		expressive = R.drawable.nrk_lock_expressive
	)

	val NrkLogout = NrkIcon(
		normal = R.drawable.nrk_logout,
		expressive = R.drawable.nrk_logout_expressive
	)

	val NrkLongread = NrkIcon(
		normal = R.drawable.nrk_longread,
		expressive = R.drawable.nrk_longread_expressive
	)

	val NrkLyn = NrkIcon(
		normal = R.drawable.nrk_lyn,
		expressive = R.drawable.nrk_lyn_expressive
	)

	val NrkMat = NrkIcon(
		normal = R.drawable.nrk_mat,
		expressive = R.drawable.nrk_mat_expressive
	)

	val NrkMedia404Notfound = NrkIcon(
		normal = R.drawable.nrk_media_404_notfound,
		expressive = R.drawable.nrk_media_404_notfound_expressive
	)

	val NrkMediaAirplay = NrkIcon(
		normal = R.drawable.nrk_media_airplay,
		expressive = R.drawable.nrk_media_airplay_expressive
	)

	val NrkMediaBeamNote = NrkIcon(
		normal = R.drawable.nrk_media_beam_note,
		expressive = R.drawable.nrk_media_beam_note_expressive
	)

	val NrkMediaChromecast = NrkIcon(
		normal = R.drawable.nrk_media_chromecast,
		expressive = R.drawable.nrk_media_chromecast_expressive
	)

	val NrkMediaCompleted = NrkIcon(
		normal = R.drawable.nrk_media_completed,
		expressive = R.drawable.nrk_media_completed_expressive
	)

	val NrkMediaDirektetv = NrkIcon(
		normal = R.drawable.nrk_media_direktetv,
		expressive = R.drawable.nrk_media_direktetv_expressive
	)

	val NrkMediaFfw15sec = NrkIcon(
		normal = R.drawable.nrk_media_ffw_15sec,
		expressive = R.drawable.nrk_media_ffw_15sec_expressive
	)

	val NrkMediaFfw30sec = NrkIcon(
		normal = R.drawable.nrk_media_ffw_30sec,
		expressive = R.drawable.nrk_media_ffw_30sec_expressive
	)

	val NrkMediaFfw5sec = NrkIcon(
		normal = R.drawable.nrk_media_ffw_5sec,
		expressive = R.drawable.nrk_media_ffw_5sec_expressive
	)

	val NrkMediaFfw = NrkIcon(
		normal = R.drawable.nrk_media_ffw,
		expressive = R.drawable.nrk_media_ffw_expressive
	)

	val NrkMediaIndexQuaverTiny = NrkIcon(
		normal = R.drawable.nrk_media_index_quaver_tiny,
		expressive = R.drawable.nrk_media_index_quaver_tiny_expressive
	)

	val NrkMediaJumpto = NrkIcon(
		normal = R.drawable.nrk_media_jumpto,
		expressive = R.drawable.nrk_media_jumpto_expressive
	)

	val NrkMediaMediaComplete = NrkIcon(
		normal = R.drawable.nrk_media_media_complete,
		expressive = R.drawable.nrk_media_media_complete_expressive
	)

	val NrkMediaMediaIncomplete = NrkIcon(
		normal = R.drawable.nrk_media_media_incomplete,
		expressive = R.drawable.nrk_media_media_incomplete_expressive
	)

	val NrkMediaNext = NrkIcon(
		normal = R.drawable.nrk_media_next,
		expressive = R.drawable.nrk_media_next_expressive
	)

	val NrkMediaPause = NrkIcon(
		normal = R.drawable.nrk_media_pause,
		expressive = R.drawable.nrk_media_pause_expressive
	)

	val NrkMediaPictureInPicture = NrkIcon(
		normal = R.drawable.nrk_media_picture_in_picture,
		expressive = R.drawable.nrk_media_picture_in_picture_expressive
	)

	val NrkMediaPlaylistAdded = NrkIcon(
		normal = R.drawable.nrk_media_playlist_added,
		expressive = R.drawable.nrk_media_playlist_added_expressive
	)

	val NrkMediaPlaylistAdd = NrkIcon(
		normal = R.drawable.nrk_media_playlist_add,
		expressive = R.drawable.nrk_media_playlist_add_expressive
	)

	val NrkMediaPlaylistAddLater = NrkIcon(
		normal = R.drawable.nrk_media_playlist_add_later,
		expressive = R.drawable.nrk_media_playlist_add_later_expressive
	)

	val NrkMediaPlaylistAddNext = NrkIcon(
		normal = R.drawable.nrk_media_playlist_add_next,
		expressive = R.drawable.nrk_media_playlist_add_next_expressive
	)

	val NrkMediaPlaylist = NrkIcon(
		normal = R.drawable.nrk_media_playlist,
		expressive = R.drawable.nrk_media_playlist_expressive
	)

	val NrkMediaPlaylistRemove = NrkIcon(
		normal = R.drawable.nrk_media_playlist_remove,
		expressive = R.drawable.nrk_media_playlist_remove_expressive
	)

	val NrkMediaPlay = NrkIcon(
		normal = R.drawable.nrk_media_play,
		expressive = R.drawable.nrk_media_play_expressive
	)

	val NrkMediaPrevious = NrkIcon(
		normal = R.drawable.nrk_media_previous,
		expressive = R.drawable.nrk_media_previous_expressive
	)

	val NrkMediaProgramguide = NrkIcon(
		normal = R.drawable.nrk_media_programguide,
		expressive = R.drawable.nrk_media_programguide_expressive
	)

	val NrkMediaQuaver = NrkIcon(
		normal = R.drawable.nrk_media_quaver,
		expressive = R.drawable.nrk_media_quaver_expressive
	)

	val NrkMediaQuaverOff = NrkIcon(
		normal = R.drawable.nrk_media_quaver_off,
		expressive = R.drawable.nrk_media_quaver_off_expressive
	)

	val NrkMediaRwd15sec = NrkIcon(
		normal = R.drawable.nrk_media_rwd_15sec,
		expressive = R.drawable.nrk_media_rwd_15sec_expressive
	)

	val NrkMediaRwd30sec = NrkIcon(
		normal = R.drawable.nrk_media_rwd_30sec,
		expressive = R.drawable.nrk_media_rwd_30sec_expressive
	)

	val NrkMediaRwd5sec = NrkIcon(
		normal = R.drawable.nrk_media_rwd_5sec,
		expressive = R.drawable.nrk_media_rwd_5sec_expressive
	)

	val NrkMediaRwd = NrkIcon(
		normal = R.drawable.nrk_media_rwd,
		expressive = R.drawable.nrk_media_rwd_expressive
	)

	val NrkMediaSoundwave = NrkIcon(
		normal = R.drawable.nrk_media_soundwave,
		expressive = R.drawable.nrk_media_soundwave_expressive
	)

	val NrkMediaStop = NrkIcon(
		normal = R.drawable.nrk_media_stop,
		expressive = R.drawable.nrk_media_stop_expressive
	)

	val NrkMediaSubtitles = NrkIcon(
		normal = R.drawable.nrk_media_subtitles,
		expressive = R.drawable.nrk_media_subtitles_expressive
	)

	val NrkMediaTheater = NrkIcon(
		normal = R.drawable.nrk_media_theater,
		expressive = R.drawable.nrk_media_theater_expressive
	)

	val NrkMediaTilgjengelighetGeoblocked = NrkIcon(
		normal = R.drawable.nrk_media_tilgjengelighet_geoblocked,
		expressive = R.drawable.nrk_media_tilgjengelighet_geoblocked_expressive
	)

	val NrkMediaTilgjengelighetIkkelengertilgjengelig = NrkIcon(
		normal = R.drawable.nrk_media_tilgjengelighet_ikkelengertilgjengelig,
		expressive = R.drawable.nrk_media_tilgjengelighet_ikkelengertilgjengelig_expressive
	)

	val NrkMediaTilgjengelighetKommer = NrkIcon(
		normal = R.drawable.nrk_media_tilgjengelighet_kommer,
		expressive = R.drawable.nrk_media_tilgjengelighet_kommer_expressive
	)

	val NrkMediaTilgjengelighetSnartutilgjengelig = NrkIcon(
		normal = R.drawable.nrk_media_tilgjengelighet_snartutilgjengelig,
		expressive = R.drawable.nrk_media_tilgjengelighet_snartutilgjengelig_expressive
	)

	val NrkMening = NrkIcon(
		normal = R.drawable.nrk_mening,
		expressive = R.drawable.nrk_mening_expressive
	)

	val NrkMinus = NrkIcon(
		normal = R.drawable.nrk_minus,
		expressive = R.drawable.nrk_minus_expressive
	)

	val NrkMore = NrkIcon(
		normal = R.drawable.nrk_more,
		expressive = R.drawable.nrk_more_expressive
	)

	val NrkNewChat = NrkIcon(
		normal = R.drawable.nrk_new_chat,
		expressive = R.drawable.nrk_new_chat_expressive
	)

	val NrkOffline = NrkIcon(
		normal = R.drawable.nrk_offline,
		expressive = R.drawable.nrk_offline_expressive
	)

	val NrkOpenInNew = NrkIcon(
		normal = R.drawable.nrk_open_in_new,
		expressive = R.drawable.nrk_open_in_new_expressive
	)

	val NrkPerson = NrkIcon(
		normal = R.drawable.nrk_person,
		expressive = R.drawable.nrk_person_expressive
	)

	val NrkPlus = NrkIcon(
		normal = R.drawable.nrk_plus,
		expressive = R.drawable.nrk_plus_expressive
	)

	val NrkPoll = NrkIcon(
		normal = R.drawable.nrk_poll,
		expressive = R.drawable.nrk_poll_expressive
	)

	val NrkProgress = NrkIcon(
		normal = R.drawable.nrk_progress,
		expressive = R.drawable.nrk_progress_expressive
	)

	val NrkRefresh = NrkIcon(
		normal = R.drawable.nrk_refresh,
		expressive = R.drawable.nrk_refresh_expressive
	)

	val NrkReload = NrkIcon(
		normal = R.drawable.nrk_reload,
		expressive = R.drawable.nrk_reload_expressive
	)

	val NrkReorder = NrkIcon(
		normal = R.drawable.nrk_reorder,
		expressive = R.drawable.nrk_reorder_expressive
	)

	val NrkRotate = NrkIcon(
		normal = R.drawable.nrk_rotate,
		expressive = R.drawable.nrk_rotate_expressive
	)

	val NrkSearch = NrkIcon(
		normal = R.drawable.nrk_search,
		expressive = R.drawable.nrk_search_expressive
	)

	val NrkSettings = NrkIcon(
		normal = R.drawable.nrk_settings,
		expressive = R.drawable.nrk_settings_expressive
	)

	val NrkSleep = NrkIcon(
		normal = R.drawable.nrk_sleep,
		expressive = R.drawable.nrk_sleep_expressive
	)

	val NrkSomeEmail = NrkIcon(
		normal = R.drawable.nrk_some_email,
		expressive = R.drawable.nrk_some_email_expressive
	)

	val NrkSomeEmbed = NrkIcon(
		normal = R.drawable.nrk_some_embed,
		expressive = R.drawable.nrk_some_embed_expressive
	)

	val NrkSomeShare = NrkIcon(
		normal = R.drawable.nrk_some_share,
		expressive = R.drawable.nrk_some_share_expressive
	)

	val NrkSomeShareIos = NrkIcon(
		normal = R.drawable.nrk_some_share_ios,
		expressive = R.drawable.nrk_some_share_ios_expressive
	)

	val NrkSomeTommelned = NrkIcon(
		normal = R.drawable.nrk_some_tommelned,
		expressive = R.drawable.nrk_some_tommelned_expressive
	)

	val NrkSomeTommelopp = NrkIcon(
		normal = R.drawable.nrk_some_tommelopp,
		expressive = R.drawable.nrk_some_tommelopp_expressive
	)

	val NrkSpinner = NrkIcon(
		normal = R.drawable.nrk_spinner,
		expressive = R.drawable.nrk_spinner_expressive
	)

	val NrkStar = NrkIcon(
		normal = R.drawable.nrk_star,
		expressive = R.drawable.nrk_star_expressive
	)

	val NrkTilgjengelighet = NrkIcon(
		normal = R.drawable.nrk_tilgjengelighet,
		expressive = R.drawable.nrk_tilgjengelighet_expressive
	)

	val NrkTilgjengelighetHorbarhet = NrkIcon(
		normal = R.drawable.nrk_tilgjengelighet_horbarhet,
		expressive = R.drawable.nrk_tilgjengelighet_horbarhet_expressive
	)

	val NrkTilgjengelighetLydtekst = NrkIcon(
		normal = R.drawable.nrk_tilgjengelighet_lydtekst,
		expressive = R.drawable.nrk_tilgjengelighet_lydtekst_expressive
	)

	val NrkTilgjengelighetSynstolking = NrkIcon(
		normal = R.drawable.nrk_tilgjengelighet_synstolking,
		expressive = R.drawable.nrk_tilgjengelighet_synstolking_expressive
	)

	val NrkTilgjengelighetTegnspraak = NrkIcon(
		normal = R.drawable.nrk_tilgjengelighet_tegnspraak,
		expressive = R.drawable.nrk_tilgjengelighet_tegnspraak_expressive
	)

	val NrkTrash = NrkIcon(
		normal = R.drawable.nrk_trash,
		expressive = R.drawable.nrk_trash_expressive
	)

	val NrkUnlock = NrkIcon(
		normal = R.drawable.nrk_unlock,
		expressive = R.drawable.nrk_unlock_expressive
	)

	val NrkUpload = NrkIcon(
		normal = R.drawable.nrk_upload,
		expressive = R.drawable.nrk_upload_expressive
	)

	val NrkUserLoggedin = NrkIcon(
		normal = R.drawable.nrk_user_loggedin,
		expressive = R.drawable.nrk_user_loggedin_expressive
	)

	val NrkUserNotloggedin = NrkIcon(
		normal = R.drawable.nrk_user_notloggedin,
		expressive = R.drawable.nrk_user_notloggedin_expressive
	)

	val NrkWarning = NrkIcon(
		normal = R.drawable.nrk_warning,
		expressive = R.drawable.nrk_warning_expressive
	)
}
