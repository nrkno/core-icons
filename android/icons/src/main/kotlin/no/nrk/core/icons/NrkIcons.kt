// This file is auto-generated. Do not edit!
package no.nrk.core.icons

import androidx.compose.runtime.Composable
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.res.painterResource

val LocalUseExpressiveIcons = staticCompositionLocalOf<Boolean> {
  error("LocalUseExpressiveIcons not found")
}

data class NrkIcon(
  val normal: Int,
  val expressive: Int?
) {
  @Composable
  fun asPainter(): Painter {
    return painterResource(
      id = if (LocalUseExpressiveIcons.current) {
        expressive ?: normal
      } else {
        normal
      }
    )
  }
}

object NrkIcons {
  val AccessibilityIcon = NrkIcon(
    normal = R.drawable.accessibility,
    expressive = R.drawable.accessibility_expressive
  )

  val AiIcon = NrkIcon(
    normal = R.drawable.ai,
    expressive = R.drawable.ai_expressive
  )

  val AiSolidIcon = NrkIcon(
    normal = R.drawable.ai_solid,
    expressive = R.drawable.ai_solid_expressive
  )

  val AirplayIcon = NrkIcon(
    normal = R.drawable.airplay,
    expressive = R.drawable.airplay_expressive
  )

  val AirplaySolidIcon = NrkIcon(
    normal = R.drawable.airplay_solid,
    expressive = R.drawable.airplay_solid_expressive
  )

  val AntennaIcon = NrkIcon(
    normal = R.drawable.antenna,
    expressive = R.drawable.antenna_expressive
  )

  val ArrowCircleClockwiseIcon = NrkIcon(
    normal = R.drawable.arrow_circle_clockwise,
    expressive = R.drawable.arrow_circle_clockwise_expressive
  )

  val ArrowCircleCounterclockwiseIcon = NrkIcon(
    normal = R.drawable.arrow_circle_counterclockwise,
    expressive = R.drawable.arrow_circle_counterclockwise_expressive
  )

  val ArrowCirclePerspectiveCounterclockwiseIcon = NrkIcon(
    normal = R.drawable.arrow_circle_perspective_counterclockwise,
    expressive = R.drawable.arrow_circle_perspective_counterclockwise_expressive
  )

  val ArrowDownIcon = NrkIcon(
    normal = R.drawable.arrow_down,
    expressive = R.drawable.arrow_down_expressive
  )

  val ArrowLeftIcon = NrkIcon(
    normal = R.drawable.arrow_left,
    expressive = R.drawable.arrow_left_expressive
  )

  val ArrowLeftLongIcon = NrkIcon(
    normal = R.drawable.arrow_left_long,
    expressive = R.drawable.arrow_left_long_expressive
  )

  val ArrowRightIcon = NrkIcon(
    normal = R.drawable.arrow_right,
    expressive = R.drawable.arrow_right_expressive
  )

  val ArrowRightLongIcon = NrkIcon(
    normal = R.drawable.arrow_right_long,
    expressive = R.drawable.arrow_right_long_expressive
  )

  val ArrowTurnRightDownIcon = NrkIcon(
    normal = R.drawable.arrow_turn_right_down,
    expressive = R.drawable.arrow_turn_right_down_expressive
  )

  val ArrowTurnUpRightIcon = NrkIcon(
    normal = R.drawable.arrow_turn_up_right,
    expressive = R.drawable.arrow_turn_up_right_expressive
  )

  val ArrowUpIcon = NrkIcon(
    normal = R.drawable.arrow_up,
    expressive = R.drawable.arrow_up_expressive
  )

  val ArrowUturnLeftIcon = NrkIcon(
    normal = R.drawable.arrow_uturn_left,
    expressive = R.drawable.arrow_uturn_left_expressive
  )

  val ArrowheadDownIcon = NrkIcon(
    normal = R.drawable.arrowhead_down,
    expressive = R.drawable.arrowhead_down_expressive
  )

  val ArrowheadUpIcon = NrkIcon(
    normal = R.drawable.arrowhead_up,
    expressive = R.drawable.arrowhead_up_expressive
  )

  val ArrowsCircleCounterclockwiseIcon = NrkIcon(
    normal = R.drawable.arrows_circle_counterclockwise,
    expressive = R.drawable.arrows_circle_counterclockwise_expressive
  )

  val ArrowsContractIcon = NrkIcon(
    normal = R.drawable.arrows_contract,
    expressive = R.drawable.arrows_contract_expressive
  )

  val ArrowsExpandIcon = NrkIcon(
    normal = R.drawable.arrows_expand,
    expressive = R.drawable.arrows_expand_expressive
  )

  val ArrowsUpDownIcon = NrkIcon(
    normal = R.drawable.arrows_up_down,
    expressive = R.drawable.arrows_up_down_expressive
  )

  val AudioDescriptionIcon = NrkIcon(
    normal = R.drawable.audio_description,
    expressive = R.drawable.audio_description_expressive
  )

  val BackwardIcon = NrkIcon(
    normal = R.drawable.backward,
    expressive = R.drawable.backward_expressive
  )

  val BackwardEndIcon = NrkIcon(
    normal = R.drawable.backward_end,
    expressive = R.drawable.backward_end_expressive
  )

  val BarGraphIcon = NrkIcon(
    normal = R.drawable.bar_graph,
    expressive = R.drawable.bar_graph_expressive
  )

  val BellIcon = NrkIcon(
    normal = R.drawable.bell,
    expressive = R.drawable.bell_expressive
  )

  val BellSolidIcon = NrkIcon(
    normal = R.drawable.bell_solid,
    expressive = R.drawable.bell_solid_expressive
  )

  val BluetoothIcon = NrkIcon(
    normal = R.drawable.bluetooth,
    expressive = R.drawable.bluetooth_expressive
  )

  val BookmarkIcon = NrkIcon(
    normal = R.drawable.bookmark,
    expressive = R.drawable.bookmark_expressive
  )

  val BookmarkSolidIcon = NrkIcon(
    normal = R.drawable.bookmark_solid,
    expressive = R.drawable.bookmark_solid_expressive
  )

  val BulletPointIcon = NrkIcon(
    normal = R.drawable.bullet_point,
    expressive = R.drawable.bullet_point_expressive
  )

  val CalendarIcon = NrkIcon(
    normal = R.drawable.calendar,
    expressive = R.drawable.calendar_expressive
  )

  val CameraIcon = NrkIcon(
    normal = R.drawable.camera,
    expressive = R.drawable.camera_expressive
  )

  val CheckboxCheckedSolidIcon = NrkIcon(
    normal = R.drawable.checkbox_checked_solid,
    expressive = R.drawable.checkbox_checked_solid_expressive
  )

  val CheckboxUncheckedIcon = NrkIcon(
    normal = R.drawable.checkbox_unchecked,
    expressive = R.drawable.checkbox_unchecked_expressive
  )

  val CheckmarkIcon = NrkIcon(
    normal = R.drawable.checkmark,
    expressive = R.drawable.checkmark_expressive
  )

  val CheckmarkCircleCheckedIcon = NrkIcon(
    normal = R.drawable.checkmark_circle_checked,
    expressive = R.drawable.checkmark_circle_checked_expressive
  )

  val CheckmarkCircleCheckedSolidIcon = NrkIcon(
    normal = R.drawable.checkmark_circle_checked_solid,
    expressive = R.drawable.checkmark_circle_checked_solid_expressive
  )

  val ChevronDownIcon = NrkIcon(
    normal = R.drawable.chevron_down,
    expressive = R.drawable.chevron_down_expressive
  )

  val ChevronLeftIcon = NrkIcon(
    normal = R.drawable.chevron_left,
    expressive = R.drawable.chevron_left_expressive
  )

  val ChevronRightIcon = NrkIcon(
    normal = R.drawable.chevron_right,
    expressive = R.drawable.chevron_right_expressive
  )

  val ChevronUpIcon = NrkIcon(
    normal = R.drawable.chevron_up,
    expressive = R.drawable.chevron_up_expressive
  )

  val ChromecastIcon = NrkIcon(
    normal = R.drawable.chromecast,
    expressive = R.drawable.chromecast_expressive
  )

  val Chromecast1Icon = NrkIcon(
    normal = R.drawable.chromecast_1,
    expressive = R.drawable.chromecast_1_expressive
  )

  val Chromecast2Icon = NrkIcon(
    normal = R.drawable.chromecast_2,
    expressive = R.drawable.chromecast_2_expressive
  )

  val Chromecast3Icon = NrkIcon(
    normal = R.drawable.chromecast_3,
    expressive = R.drawable.chromecast_3_expressive
  )

  val ChromecastSolidIcon = NrkIcon(
    normal = R.drawable.chromecast_solid,
    expressive = R.drawable.chromecast_solid_expressive
  )

  val CircleHalfDottedIcon = NrkIcon(
    normal = R.drawable.circle_half_dotted,
    expressive = R.drawable.circle_half_dotted_expressive
  )

  val CircleInCircleIcon = NrkIcon(
    normal = R.drawable.circle_in_circle,
    expressive = null
  )

  val CircleInCircleSolidIcon = NrkIcon(
    normal = R.drawable.circle_in_circle_solid,
    expressive = null
  )

  val CircleThreeQuarterIcon = NrkIcon(
    normal = R.drawable.circle_three_quarter,
    expressive = R.drawable.circle_three_quarter_expressive
  )

  val ClockIcon = NrkIcon(
    normal = R.drawable.clock,
    expressive = R.drawable.clock_expressive
  )

  val ClockAlarmIcon = NrkIcon(
    normal = R.drawable.clock_alarm,
    expressive = R.drawable.clock_alarm_expressive
  )

  val ClockAndDotIcon = NrkIcon(
    normal = R.drawable.clock_and_dot,
    expressive = null
  )

  val ClockAndDotSolidIcon = NrkIcon(
    normal = R.drawable.clock_and_dot_solid,
    expressive = null
  )

  val ClockTimerIcon = NrkIcon(
    normal = R.drawable.clock_timer,
    expressive = R.drawable.clock_timer_expressive
  )

  val CodeIcon = NrkIcon(
    normal = R.drawable.code,
    expressive = R.drawable.code_expressive
  )

  val CutleryIcon = NrkIcon(
    normal = R.drawable.cutlery,
    expressive = R.drawable.cutlery_expressive
  )

  val Dice1Icon = NrkIcon(
    normal = R.drawable.dice_1,
    expressive = null
  )

  val Dice1SolidIcon = NrkIcon(
    normal = R.drawable.dice_1_solid,
    expressive = null
  )

  val Dice2Icon = NrkIcon(
    normal = R.drawable.dice_2,
    expressive = null
  )

  val Dice2SolidIcon = NrkIcon(
    normal = R.drawable.dice_2_solid,
    expressive = null
  )

  val Dice3Icon = NrkIcon(
    normal = R.drawable.dice_3,
    expressive = null
  )

  val Dice3SolidIcon = NrkIcon(
    normal = R.drawable.dice_3_solid,
    expressive = null
  )

  val Dice4Icon = NrkIcon(
    normal = R.drawable.dice_4,
    expressive = null
  )

  val Dice4SolidIcon = NrkIcon(
    normal = R.drawable.dice_4_solid,
    expressive = null
  )

  val Dice5Icon = NrkIcon(
    normal = R.drawable.dice_5,
    expressive = null
  )

  val Dice5SolidIcon = NrkIcon(
    normal = R.drawable.dice_5_solid,
    expressive = null
  )

  val Dice6Icon = NrkIcon(
    normal = R.drawable.dice_6,
    expressive = null
  )

  val Dice6SolidIcon = NrkIcon(
    normal = R.drawable.dice_6_solid,
    expressive = null
  )

  val DocumentIcon = NrkIcon(
    normal = R.drawable.document,
    expressive = R.drawable.document_expressive
  )

  val DotRadiowavesIcon = NrkIcon(
    normal = R.drawable.dot_radiowaves,
    expressive = R.drawable.dot_radiowaves_expressive
  )

  val DotRadiowavesCircleSolidIcon = NrkIcon(
    normal = R.drawable.dot_radiowaves_circle_solid,
    expressive = R.drawable.dot_radiowaves_circle_solid_expressive
  )

  val DownloadIcon = NrkIcon(
    normal = R.drawable.download,
    expressive = R.drawable.download_expressive
  )

  val DragHorizontalIcon = NrkIcon(
    normal = R.drawable.drag_horizontal,
    expressive = R.drawable.drag_horizontal_expressive
  )

  val EarIcon = NrkIcon(
    normal = R.drawable.ear,
    expressive = R.drawable.ear_expressive
  )

  val EllipsisIcon = NrkIcon(
    normal = R.drawable.ellipsis,
    expressive = R.drawable.ellipsis_expressive
  )

  val EllipsisCircleSolidIcon = NrkIcon(
    normal = R.drawable.ellipsis_circle_solid,
    expressive = R.drawable.ellipsis_circle_solid_expressive
  )

  val EllipsisVerticalIcon = NrkIcon(
    normal = R.drawable.ellipsis_vertical,
    expressive = R.drawable.ellipsis_vertical_expressive
  )

  val EllipsisVerticalCircleSolidIcon = NrkIcon(
    normal = R.drawable.ellipsis_vertical_circle_solid,
    expressive = R.drawable.ellipsis_vertical_circle_solid_expressive
  )

  val EnvelopeIcon = NrkIcon(
    normal = R.drawable.envelope,
    expressive = R.drawable.envelope_expressive
  )

  val ExclamationMarkTriangleIcon = NrkIcon(
    normal = R.drawable.exclamation_mark_triangle,
    expressive = R.drawable.exclamation_mark_triangle_expressive
  )

  val EyeIcon = NrkIcon(
    normal = R.drawable.eye,
    expressive = R.drawable.eye_expressive
  )

  val EyeSlashIcon = NrkIcon(
    normal = R.drawable.eye_slash,
    expressive = R.drawable.eye_slash_expressive
  )

  val FaceGrinningIcon = NrkIcon(
    normal = R.drawable.face_grinning,
    expressive = R.drawable.face_grinning_expressive
  )

  val FaceGrinningSolidIcon = NrkIcon(
    normal = R.drawable.face_grinning_solid,
    expressive = R.drawable.face_grinning_solid_expressive
  )

  val FaceSmilingIcon = NrkIcon(
    normal = R.drawable.face_smiling,
    expressive = R.drawable.face_smiling_expressive
  )

  val FaceSmilingSolidIcon = NrkIcon(
    normal = R.drawable.face_smiling_solid,
    expressive = R.drawable.face_smiling_solid_expressive
  )

  val ForwardIcon = NrkIcon(
    normal = R.drawable.forward,
    expressive = R.drawable.forward_expressive
  )

  val ForwardEndIcon = NrkIcon(
    normal = R.drawable.forward_end,
    expressive = R.drawable.forward_end_expressive
  )

  val GameControllerIcon = NrkIcon(
    normal = R.drawable.game_controller,
    expressive = R.drawable.game_controller_expressive
  )

  val GlassesIcon = NrkIcon(
    normal = R.drawable.glasses,
    expressive = R.drawable.glasses_expressive
  )

  val GlassesSolidIcon = NrkIcon(
    normal = R.drawable.glasses_solid,
    expressive = R.drawable.glasses_solid_expressive
  )

  val GlobeIcon = NrkIcon(
    normal = R.drawable.globe,
    expressive = R.drawable.globe_expressive
  )

  val GoBackward15Icon = NrkIcon(
    normal = R.drawable.go_backward_15,
    expressive = R.drawable.go_backward_15_expressive
  )

  val GoBackward30Icon = NrkIcon(
    normal = R.drawable.go_backward_30,
    expressive = R.drawable.go_backward_30_expressive
  )

  val GoBackward5Icon = NrkIcon(
    normal = R.drawable.go_backward_5,
    expressive = R.drawable.go_backward_5_expressive
  )

  val GoForward15Icon = NrkIcon(
    normal = R.drawable.go_forward_15,
    expressive = R.drawable.go_forward_15_expressive
  )

  val GoForward30Icon = NrkIcon(
    normal = R.drawable.go_forward_30,
    expressive = R.drawable.go_forward_30_expressive
  )

  val GoForward5Icon = NrkIcon(
    normal = R.drawable.go_forward_5,
    expressive = R.drawable.go_forward_5_expressive
  )

  val HeadphonesIcon = NrkIcon(
    normal = R.drawable.headphones,
    expressive = R.drawable.headphones_expressive
  )

  val HeartIcon = NrkIcon(
    normal = R.drawable.heart,
    expressive = R.drawable.heart_expressive
  )

  val HeartSolidIcon = NrkIcon(
    normal = R.drawable.heart_solid,
    expressive = R.drawable.heart_solid_expressive
  )

  val HourglassIcon = NrkIcon(
    normal = R.drawable.hourglass,
    expressive = R.drawable.hourglass_expressive
  )

  val HouseIcon = NrkIcon(
    normal = R.drawable.house,
    expressive = R.drawable.house_expressive
  )

  val HouseSolidIcon = NrkIcon(
    normal = R.drawable.house_solid,
    expressive = R.drawable.house_solid_expressive
  )

  val ImageStackIcon = NrkIcon(
    normal = R.drawable.image_stack,
    expressive = R.drawable.image_stack_expressive
  )

  val ImageTinyIcon = NrkIcon(
    normal = R.drawable.image_tiny,
    expressive = R.drawable.image_tiny_expressive
  )

  val InfoCircleIcon = NrkIcon(
    normal = R.drawable.info_circle,
    expressive = R.drawable.info_circle_expressive
  )

  val JumptoIcon = NrkIcon(
    normal = R.drawable.jumpto,
    expressive = R.drawable.jumpto_expressive
  )

  val LaptopIcon = NrkIcon(
    normal = R.drawable.laptop,
    expressive = R.drawable.laptop_expressive
  )

  val LightningBoltOutlineIcon = NrkIcon(
    normal = R.drawable.lightning_bolt_outline,
    expressive = R.drawable.lightning_bolt_outline_expressive
  )

  val LightningBoltSolidIcon = NrkIcon(
    normal = R.drawable.lightning_bolt_solid,
    expressive = R.drawable.lightning_bolt_solid_expressive
  )

  val LinkIcon = NrkIcon(
    normal = R.drawable.link,
    expressive = R.drawable.link_expressive
  )

  val LinkTinyIcon = NrkIcon(
    normal = R.drawable.link_tiny,
    expressive = R.drawable.link_tiny_expressive
  )

  val ListIcon = NrkIcon(
    normal = R.drawable.list,
    expressive = R.drawable.list_expressive
  )

  val ListArrowToBottomIcon = NrkIcon(
    normal = R.drawable.list_arrow_to_bottom,
    expressive = R.drawable.list_arrow_to_bottom_expressive
  )

  val ListArrowToTopIcon = NrkIcon(
    normal = R.drawable.list_arrow_to_top,
    expressive = R.drawable.list_arrow_to_top_expressive
  )

  val ListBulletIcon = NrkIcon(
    normal = R.drawable.list_bullet,
    expressive = R.drawable.list_bullet_expressive
  )

  val ListCheckIcon = NrkIcon(
    normal = R.drawable.list_check,
    expressive = R.drawable.list_check_expressive
  )

  val ListPlayIcon = NrkIcon(
    normal = R.drawable.list_play,
    expressive = R.drawable.list_play_expressive
  )

  val ListPlusIcon = NrkIcon(
    normal = R.drawable.list_plus,
    expressive = R.drawable.list_plus_expressive
  )

  val ListStrongIcon = NrkIcon(
    normal = R.drawable.list_strong,
    expressive = R.drawable.list_strong_expressive
  )

  val ListXmarkIcon = NrkIcon(
    normal = R.drawable.list_xmark,
    expressive = R.drawable.list_xmark_expressive
  )

  val LockClosedIcon = NrkIcon(
    normal = R.drawable.lock_closed,
    expressive = R.drawable.lock_closed_expressive
  )

  val LockClosedSolidIcon = NrkIcon(
    normal = R.drawable.lock_closed_solid,
    expressive = R.drawable.lock_closed_solid_expressive
  )

  val LockOpenIcon = NrkIcon(
    normal = R.drawable.lock_open,
    expressive = R.drawable.lock_open_expressive
  )

  val LockOpenSolidIcon = NrkIcon(
    normal = R.drawable.lock_open_solid,
    expressive = R.drawable.lock_open_solid_expressive
  )

  val LogoutIcon = NrkIcon(
    normal = R.drawable.logout,
    expressive = R.drawable.logout_expressive
  )

  val MagazineIcon = NrkIcon(
    normal = R.drawable.magazine,
    expressive = R.drawable.magazine_expressive
  )

  val MagazineSolidIcon = NrkIcon(
    normal = R.drawable.magazine_solid,
    expressive = R.drawable.magazine_solid_expressive
  )

  val MagnifyingGlassIcon = NrkIcon(
    normal = R.drawable.magnifying_glass,
    expressive = R.drawable.magnifying_glass_expressive
  )

  val MagnifyingGlassStrongIcon = NrkIcon(
    normal = R.drawable.magnifying_glass_strong,
    expressive = R.drawable.magnifying_glass_strong_expressive
  )

  val MicrophoneIcon = NrkIcon(
    normal = R.drawable.microphone,
    expressive = R.drawable.microphone_expressive
  )

  val MicrophoneSolidIcon = NrkIcon(
    normal = R.drawable.microphone_solid,
    expressive = R.drawable.microphone_solid_expressive
  )

  val MinusIcon = NrkIcon(
    normal = R.drawable.minus,
    expressive = R.drawable.minus_expressive
  )

  val MobileCheckIcon = NrkIcon(
    normal = R.drawable.mobile_check,
    expressive = R.drawable.mobile_check_expressive
  )

  val MonitorIcon = NrkIcon(
    normal = R.drawable.monitor,
    expressive = R.drawable.monitor_expressive
  )

  val Multiplier0_8Icon = NrkIcon(
    normal = R.drawable.multiplier_0_8,
    expressive = null
  )

  val Multiplier1Icon = NrkIcon(
    normal = R.drawable.multiplier_1,
    expressive = null
  )

  val Multiplier1_25Icon = NrkIcon(
    normal = R.drawable.multiplier_1_25,
    expressive = null
  )

  val Multiplier1_5Icon = NrkIcon(
    normal = R.drawable.multiplier_1_5,
    expressive = null
  )

  val Multiplier2Icon = NrkIcon(
    normal = R.drawable.multiplier_2,
    expressive = null
  )

  val MusicNoteIcon = NrkIcon(
    normal = R.drawable.music_note,
    expressive = R.drawable.music_note_expressive
  )

  val MusicNoteSlashIcon = NrkIcon(
    normal = R.drawable.music_note_slash,
    expressive = R.drawable.music_note_slash_expressive
  )

  val MusicNoteSolidIcon = NrkIcon(
    normal = R.drawable.music_note_solid,
    expressive = R.drawable.music_note_solid_expressive
  )

  val MusicNoteTinyIcon = NrkIcon(
    normal = R.drawable.music_note_tiny,
    expressive = R.drawable.music_note_tiny_expressive
  )

  val MusicNotesIcon = NrkIcon(
    normal = R.drawable.music_notes,
    expressive = R.drawable.music_notes_expressive
  )

  val NrkMediaAgelimit12Icon = NrkIcon(
    normal = R.drawable.nrk_media_agelimit_12,
    expressive = null
  )

  val NrkMediaAgelimit15Icon = NrkIcon(
    normal = R.drawable.nrk_media_agelimit_15,
    expressive = null
  )

  val NrkMediaAgelimit18Icon = NrkIcon(
    normal = R.drawable.nrk_media_agelimit_18,
    expressive = null
  )

  val NrkMediaAgelimit6Icon = NrkIcon(
    normal = R.drawable.nrk_media_agelimit_6,
    expressive = null
  )

  val NrkMediaAgelimit9Icon = NrkIcon(
    normal = R.drawable.nrk_media_agelimit_9,
    expressive = null
  )

  val NrkMediaAgelimitAIcon = NrkIcon(
    normal = R.drawable.nrk_media_agelimit_a,
    expressive = null
  )

  val NrkSomeFacebookIcon = NrkIcon(
    normal = R.drawable.nrk_some_facebook,
    expressive = null
  )

  val NrkSomeGoogleIcon = NrkIcon(
    normal = R.drawable.nrk_some_google,
    expressive = null
  )

  val NrkSomeInstagramIcon = NrkIcon(
    normal = R.drawable.nrk_some_instagram,
    expressive = null
  )

  val NrkSomePinterestIcon = NrkIcon(
    normal = R.drawable.nrk_some_pinterest,
    expressive = null
  )

  val NrkSomeSnapchatIcon = NrkIcon(
    normal = R.drawable.nrk_some_snapchat,
    expressive = null
  )

  val NrkSomeTwitterIcon = NrkIcon(
    normal = R.drawable.nrk_some_twitter,
    expressive = null
  )

  val NrkSomeYoutubeIcon = NrkIcon(
    normal = R.drawable.nrk_some_youtube,
    expressive = null
  )

  val NrksuperAvatarIcon = NrkIcon(
    normal = R.drawable.nrksuper_avatar,
    expressive = R.drawable.nrksuper_avatar_expressive
  )

  val NrksuperPoopSadIcon = NrkIcon(
    normal = R.drawable.nrksuper_poop_sad,
    expressive = null
  )

  val OpenExternalIcon = NrkIcon(
    normal = R.drawable.open_external,
    expressive = R.drawable.open_external_expressive
  )

  val ParasolIcon = NrkIcon(
    normal = R.drawable.parasol,
    expressive = R.drawable.parasol_expressive
  )

  val PauseIcon = NrkIcon(
    normal = R.drawable.pause,
    expressive = R.drawable.pause_expressive
  )

  val PencilLineIcon = NrkIcon(
    normal = R.drawable.pencil_line,
    expressive = R.drawable.pencil_line_expressive
  )

  val PersonIcon = NrkIcon(
    normal = R.drawable.person,
    expressive = R.drawable.person_expressive
  )

  val PhoneIcon = NrkIcon(
    normal = R.drawable.phone,
    expressive = R.drawable.phone_expressive
  )

  val PictureInPictureEnterIcon = NrkIcon(
    normal = R.drawable.picture_in_picture_enter,
    expressive = R.drawable.picture_in_picture_enter_expressive
  )

  val PictureInPictureExitIcon = NrkIcon(
    normal = R.drawable.picture_in_picture_exit,
    expressive = R.drawable.picture_in_picture_exit_expressive
  )

  val PinIcon = NrkIcon(
    normal = R.drawable.pin,
    expressive = R.drawable.pin_expressive
  )

  val PinSolidIcon = NrkIcon(
    normal = R.drawable.pin_solid,
    expressive = R.drawable.pin_solid_expressive
  )

  val PlayIcon = NrkIcon(
    normal = R.drawable.play,
    expressive = R.drawable.play_expressive
  )

  val PlayRectangleIcon = NrkIcon(
    normal = R.drawable.play_rectangle,
    expressive = R.drawable.play_rectangle_expressive
  )

  val PlaySlashIcon = NrkIcon(
    normal = R.drawable.play_slash,
    expressive = R.drawable.play_slash_expressive
  )

  val PlusIcon = NrkIcon(
    normal = R.drawable.plus,
    expressive = R.drawable.plus_expressive
  )

  val PrinterIcon = NrkIcon(
    normal = R.drawable.printer,
    expressive = R.drawable.printer_expressive
  )

  val QuestionMarkCircleIcon = NrkIcon(
    normal = R.drawable.question_mark_circle,
    expressive = R.drawable.question_mark_circle_expressive
  )

  val QuestionmarkIcon = NrkIcon(
    normal = R.drawable.questionmark,
    expressive = null
  )

  val QuoteIcon = NrkIcon(
    normal = R.drawable.quote,
    expressive = R.drawable.quote_expressive
  )

  val RadioIcon = NrkIcon(
    normal = R.drawable.radio,
    expressive = R.drawable.radio_expressive
  )

  val RadioButtonCheckedIcon = NrkIcon(
    normal = R.drawable.radio_button_checked,
    expressive = null
  )

  val RadioButtonUncheckedIcon = NrkIcon(
    normal = R.drawable.radio_button_unchecked,
    expressive = null
  )

  val RadioSolidIcon = NrkIcon(
    normal = R.drawable.radio_solid,
    expressive = R.drawable.radio_solid_expressive
  )

  val RectangleContractIcon = NrkIcon(
    normal = R.drawable.rectangle_contract,
    expressive = R.drawable.rectangle_contract_expressive
  )

  val RectangleExpandIcon = NrkIcon(
    normal = R.drawable.rectangle_expand,
    expressive = R.drawable.rectangle_expand_expressive
  )

  val RectangleLandscapeToPortraitIcon = NrkIcon(
    normal = R.drawable.rectangle_landscape_to_portrait,
    expressive = R.drawable.rectangle_landscape_to_portrait_expressive
  )

  val RectanglePortraitToLandscapeIcon = NrkIcon(
    normal = R.drawable.rectangle_portrait_to_landscape,
    expressive = R.drawable.rectangle_portrait_to_landscape_expressive
  )

  val SettingsIcon = NrkIcon(
    normal = R.drawable.settings,
    expressive = R.drawable.settings_expressive
  )

  val SettingsSolidIcon = NrkIcon(
    normal = R.drawable.settings_solid,
    expressive = R.drawable.settings_solid_expressive
  )

  val ShapesUnorderedIcon = NrkIcon(
    normal = R.drawable.shapes_unordered,
    expressive = R.drawable.shapes_unordered_expressive
  )

  val SignLanguageIcon = NrkIcon(
    normal = R.drawable.sign_language,
    expressive = R.drawable.sign_language_expressive
  )

  val SlidersIcon = NrkIcon(
    normal = R.drawable.sliders,
    expressive = R.drawable.sliders_expressive
  )

  val SmartSpeakerIcon = NrkIcon(
    normal = R.drawable.smart_speaker,
    expressive = R.drawable.smart_speaker_expressive
  )

  val SmartWatchIcon = NrkIcon(
    normal = R.drawable.smart_watch,
    expressive = R.drawable.smart_watch_expressive
  )

  val SoundwaveIcon = NrkIcon(
    normal = R.drawable.soundwave,
    expressive = R.drawable.soundwave_expressive
  )

  val SpeakerIcon = NrkIcon(
    normal = R.drawable.speaker,
    expressive = R.drawable.speaker_expressive
  )

  val SpeechBubbleExclamationMarkIcon = NrkIcon(
    normal = R.drawable.speech_bubble_exclamation_mark,
    expressive = R.drawable.speech_bubble_exclamation_mark_expressive
  )

  val SpeechBubbleInactiveIcon = NrkIcon(
    normal = R.drawable.speech_bubble_inactive,
    expressive = R.drawable.speech_bubble_inactive_expressive
  )

  val SpeechBubbleLineIcon = NrkIcon(
    normal = R.drawable.speech_bubble_line,
    expressive = R.drawable.speech_bubble_line_expressive
  )

  val SpeechBubblePlusIcon = NrkIcon(
    normal = R.drawable.speech_bubble_plus,
    expressive = R.drawable.speech_bubble_plus_expressive
  )

  val SpeechBubbleQuoteIcon = NrkIcon(
    normal = R.drawable.speech_bubble_quote,
    expressive = R.drawable.speech_bubble_quote_expressive
  )

  val SpeechBubbleQuoteSolidIcon = NrkIcon(
    normal = R.drawable.speech_bubble_quote_solid,
    expressive = R.drawable.speech_bubble_quote_solid_expressive
  )

  val SpeechBubbleSubtitlesIcon = NrkIcon(
    normal = R.drawable.speech_bubble_subtitles,
    expressive = R.drawable.speech_bubble_subtitles_expressive
  )

  val SpeechBubbleSubtitlesSolidIcon = NrkIcon(
    normal = R.drawable.speech_bubble_subtitles_solid,
    expressive = R.drawable.speech_bubble_subtitles_solid_expressive
  )

  val SpeechBubblesIcon = NrkIcon(
    normal = R.drawable.speech_bubbles,
    expressive = R.drawable.speech_bubbles_expressive
  )

  val SpokenSubtitlesIcon = NrkIcon(
    normal = R.drawable.spoken_subtitles,
    expressive = R.drawable.spoken_subtitles_expressive
  )

  val SquareAndArrowUpIcon = NrkIcon(
    normal = R.drawable.square_and_arrow_up,
    expressive = R.drawable.square_and_arrow_up_expressive
  )

  val Squares2x2Icon = NrkIcon(
    normal = R.drawable.squares_2x2,
    expressive = R.drawable.squares_2x2_expressive
  )

  val Squares2x2SolidIcon = NrkIcon(
    normal = R.drawable.squares_2x2_solid,
    expressive = R.drawable.squares_2x2_solid_expressive
  )

  val StarIcon = NrkIcon(
    normal = R.drawable.star,
    expressive = R.drawable.star_expressive
  )

  val StarSolidIcon = NrkIcon(
    normal = R.drawable.star_solid,
    expressive = R.drawable.star_solid_expressive
  )

  val StopIcon = NrkIcon(
    normal = R.drawable.stop,
    expressive = R.drawable.stop_expressive
  )

  val SunHorizonIcon = NrkIcon(
    normal = R.drawable.sun_horizon,
    expressive = R.drawable.sun_horizon_expressive
  )

  val TabletIcon = NrkIcon(
    normal = R.drawable.tablet,
    expressive = R.drawable.tablet_expressive
  )

  val TagNyIcon = NrkIcon(
    normal = R.drawable.tag_ny,
    expressive = null
  )

  val TargetIcon = NrkIcon(
    normal = R.drawable.target,
    expressive = R.drawable.target_expressive
  )

  val TargetSolidIcon = NrkIcon(
    normal = R.drawable.target_solid,
    expressive = R.drawable.target_solid_expressive
  )

  val ThumbsDownIcon = NrkIcon(
    normal = R.drawable.thumbs_down,
    expressive = R.drawable.thumbs_down_expressive
  )

  val ThumbsDownSolidIcon = NrkIcon(
    normal = R.drawable.thumbs_down_solid,
    expressive = R.drawable.thumbs_down_solid_expressive
  )

  val ThumbsUpIcon = NrkIcon(
    normal = R.drawable.thumbs_up,
    expressive = R.drawable.thumbs_up_expressive
  )

  val ThumbsUpSolidIcon = NrkIcon(
    normal = R.drawable.thumbs_up_solid,
    expressive = R.drawable.thumbs_up_solid_expressive
  )

  val TrashcanIcon = NrkIcon(
    normal = R.drawable.trashcan,
    expressive = R.drawable.trashcan_expressive
  )

  val TrashcanSolidIcon = NrkIcon(
    normal = R.drawable.trashcan_solid,
    expressive = R.drawable.trashcan_solid_expressive
  )

  val TvIcon = NrkIcon(
    normal = R.drawable.tv,
    expressive = R.drawable.tv_expressive
  )

  val TvDotIcon = NrkIcon(
    normal = R.drawable.tv_dot,
    expressive = R.drawable.tv_dot_expressive
  )

  val TvDotSolidIcon = NrkIcon(
    normal = R.drawable.tv_dot_solid,
    expressive = R.drawable.tv_dot_solid_expressive
  )

  val UploadIcon = NrkIcon(
    normal = R.drawable.upload,
    expressive = R.drawable.upload_expressive
  )

  val Volume1Icon = NrkIcon(
    normal = R.drawable.volume_1,
    expressive = R.drawable.volume_1_expressive
  )

  val Volume2Icon = NrkIcon(
    normal = R.drawable.volume_2,
    expressive = R.drawable.volume_2_expressive
  )

  val Volume3Icon = NrkIcon(
    normal = R.drawable.volume_3,
    expressive = R.drawable.volume_3_expressive
  )

  val VolumeXIcon = NrkIcon(
    normal = R.drawable.volume_x,
    expressive = R.drawable.volume_x_expressive
  )

  val WatchIcon = NrkIcon(
    normal = R.drawable.watch,
    expressive = R.drawable.watch_expressive
  )

  val WifiIcon = NrkIcon(
    normal = R.drawable.wifi,
    expressive = R.drawable.wifi_expressive
  )

  val WifiSlashIcon = NrkIcon(
    normal = R.drawable.wifi_slash,
    expressive = R.drawable.wifi_slash_expressive
  )

  val XmarkIcon = NrkIcon(
    normal = R.drawable.xmark,
    expressive = R.drawable.xmark_expressive
  )

  val XmarkCircleCheckedIcon = NrkIcon(
    normal = R.drawable.xmark_circle_checked,
    expressive = R.drawable.xmark_circle_checked_expressive
  )

  val XmarkCircleCheckedSolidIcon = NrkIcon(
    normal = R.drawable.xmark_circle_checked_solid,
    expressive = R.drawable.xmark_circle_checked_solid_expressive
  )

  val ZzIcon = NrkIcon(
    normal = R.drawable.zz,
    expressive = R.drawable.zz_expressive
  )

    val MgpLogo = NrkIcon(
      normal = R.drawable.mgp,
      expressive = null
    )

    val NrkLogo = NrkIcon(
      normal = R.drawable.nrk,
      expressive = null
    )

    val Nrk1Logo = NrkIcon(
      normal = R.drawable.nrk_1,
      expressive = null
    )

    val Nrk1LargeLogo = NrkIcon(
      normal = R.drawable.nrk_1_large,
      expressive = null
    )

    val Nrk1OnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_1_on_dark,
      expressive = null
    )

    val Nrk1OnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_1_on_dark_large,
      expressive = null
    )

    val Nrk1OnLightLogo = NrkIcon(
      normal = R.drawable.nrk_1_on_light,
      expressive = null
    )

    val Nrk1OnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_1_on_light_large,
      expressive = null
    )

    val Nrk1WithBgLogo = NrkIcon(
      normal = R.drawable.nrk_1_with_bg,
      expressive = null
    )

    val Nrk1WithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_1_with_bg_large,
      expressive = null
    )

    val Nrk2Logo = NrkIcon(
      normal = R.drawable.nrk_2,
      expressive = null
    )

    val Nrk2LargeLogo = NrkIcon(
      normal = R.drawable.nrk_2_large,
      expressive = null
    )

    val Nrk2OnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_2_on_dark,
      expressive = null
    )

    val Nrk2OnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_2_on_dark_large,
      expressive = null
    )

    val Nrk2OnLightLogo = NrkIcon(
      normal = R.drawable.nrk_2_on_light,
      expressive = null
    )

    val Nrk2OnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_2_on_light_large,
      expressive = null
    )

    val Nrk2WithBgLogo = NrkIcon(
      normal = R.drawable.nrk_2_with_bg,
      expressive = null
    )

    val Nrk2WithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_2_with_bg_large,
      expressive = null
    )

    val Nrk3Logo = NrkIcon(
      normal = R.drawable.nrk_3,
      expressive = null
    )

    val Nrk3LargeLogo = NrkIcon(
      normal = R.drawable.nrk_3_large,
      expressive = null
    )

    val Nrk3OnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_3_on_dark,
      expressive = null
    )

    val Nrk3OnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_3_on_dark_large,
      expressive = null
    )

    val Nrk3OnLightLogo = NrkIcon(
      normal = R.drawable.nrk_3_on_light,
      expressive = null
    )

    val Nrk3OnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_3_on_light_large,
      expressive = null
    )

    val Nrk3WithBgLogo = NrkIcon(
      normal = R.drawable.nrk_3_with_bg,
      expressive = null
    )

    val Nrk3WithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_3_with_bg_large,
      expressive = null
    )

    val NrkBuskerudLogo = NrkIcon(
      normal = R.drawable.nrk_buskerud,
      expressive = null
    )

    val NrkBuskerudLargeLogo = NrkIcon(
      normal = R.drawable.nrk_buskerud_large,
      expressive = null
    )

    val NrkBuskerudOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_buskerud_on_dark,
      expressive = null
    )

    val NrkBuskerudOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_buskerud_on_dark_large,
      expressive = null
    )

    val NrkBuskerudOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_buskerud_on_light,
      expressive = null
    )

    val NrkBuskerudOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_buskerud_on_light_large,
      expressive = null
    )

    val NrkBuskerudTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_buskerud_title_below,
      expressive = null
    )

    val NrkBuskerudTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_buskerud_title_below_large,
      expressive = null
    )

    val NrkBuskerudTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_buskerud_title_below_on_dark,
      expressive = null
    )

    val NrkBuskerudTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_buskerud_title_below_on_dark_large,
      expressive = null
    )

    val NrkBuskerudTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_buskerud_title_below_on_light,
      expressive = null
    )

    val NrkBuskerudTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_buskerud_title_below_on_light_large,
      expressive = null
    )

    val NrkBuskerudWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_buskerud_with_bg,
      expressive = null
    )

    val NrkBuskerudWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_buskerud_with_bg_large,
      expressive = null
    )

    val NrkFinnmarkLogo = NrkIcon(
      normal = R.drawable.nrk_finnmark,
      expressive = null
    )

    val NrkFinnmarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_finnmark_large,
      expressive = null
    )

    val NrkFinnmarkOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_finnmark_on_dark,
      expressive = null
    )

    val NrkFinnmarkOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_finnmark_on_dark_large,
      expressive = null
    )

    val NrkFinnmarkOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_finnmark_on_light,
      expressive = null
    )

    val NrkFinnmarkOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_finnmark_on_light_large,
      expressive = null
    )

    val NrkFinnmarkTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_finnmark_title_below,
      expressive = null
    )

    val NrkFinnmarkTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_finnmark_title_below_large,
      expressive = null
    )

    val NrkFinnmarkTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_finnmark_title_below_on_dark,
      expressive = null
    )

    val NrkFinnmarkTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_finnmark_title_below_on_dark_large,
      expressive = null
    )

    val NrkFinnmarkTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_finnmark_title_below_on_light,
      expressive = null
    )

    val NrkFinnmarkTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_finnmark_title_below_on_light_large,
      expressive = null
    )

    val NrkFinnmarkWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_finnmark_with_bg,
      expressive = null
    )

    val NrkFinnmarkWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_finnmark_with_bg_large,
      expressive = null
    )

    val NrkFolkemusikkLogo = NrkIcon(
      normal = R.drawable.nrk_folkemusikk,
      expressive = null
    )

    val NrkFolkemusikkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_folkemusikk_large,
      expressive = null
    )

    val NrkFolkemusikkOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_folkemusikk_on_dark,
      expressive = null
    )

    val NrkFolkemusikkOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_folkemusikk_on_dark_large,
      expressive = null
    )

    val NrkFolkemusikkOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_folkemusikk_on_light,
      expressive = null
    )

    val NrkFolkemusikkOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_folkemusikk_on_light_large,
      expressive = null
    )

    val NrkFolkemusikkTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_folkemusikk_title_below,
      expressive = null
    )

    val NrkFolkemusikkTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_folkemusikk_title_below_large,
      expressive = null
    )

    val NrkFolkemusikkTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_folkemusikk_title_below_on_dark,
      expressive = null
    )

    val NrkFolkemusikkTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_folkemusikk_title_below_on_dark_large,
      expressive = null
    )

    val NrkFolkemusikkTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_folkemusikk_title_below_on_light,
      expressive = null
    )

    val NrkFolkemusikkTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_folkemusikk_title_below_on_light_large,
      expressive = null
    )

    val NrkFolkemusikkWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_folkemusikk_with_bg,
      expressive = null
    )

    val NrkFolkemusikkWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_folkemusikk_with_bg_large,
      expressive = null
    )

    val NrkInnlandetLogo = NrkIcon(
      normal = R.drawable.nrk_innlandet,
      expressive = null
    )

    val NrkInnlandetLargeLogo = NrkIcon(
      normal = R.drawable.nrk_innlandet_large,
      expressive = null
    )

    val NrkInnlandetOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_innlandet_on_dark,
      expressive = null
    )

    val NrkInnlandetOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_innlandet_on_dark_large,
      expressive = null
    )

    val NrkInnlandetOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_innlandet_on_light,
      expressive = null
    )

    val NrkInnlandetOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_innlandet_on_light_large,
      expressive = null
    )

    val NrkInnlandetTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_innlandet_title_below,
      expressive = null
    )

    val NrkInnlandetTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_innlandet_title_below_large,
      expressive = null
    )

    val NrkInnlandetTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_innlandet_title_below_on_dark,
      expressive = null
    )

    val NrkInnlandetTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_innlandet_title_below_on_dark_large,
      expressive = null
    )

    val NrkInnlandetTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_innlandet_title_below_on_light,
      expressive = null
    )

    val NrkInnlandetTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_innlandet_title_below_on_light_large,
      expressive = null
    )

    val NrkInnlandetWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_innlandet_with_bg,
      expressive = null
    )

    val NrkInnlandetWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_innlandet_with_bg_large,
      expressive = null
    )

    val NrkJazzLogo = NrkIcon(
      normal = R.drawable.nrk_jazz,
      expressive = null
    )

    val NrkJazzLargeLogo = NrkIcon(
      normal = R.drawable.nrk_jazz_large,
      expressive = null
    )

    val NrkJazzOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_jazz_on_dark,
      expressive = null
    )

    val NrkJazzOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_jazz_on_dark_large,
      expressive = null
    )

    val NrkJazzOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_jazz_on_light,
      expressive = null
    )

    val NrkJazzOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_jazz_on_light_large,
      expressive = null
    )

    val NrkJazzTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_jazz_title_below,
      expressive = null
    )

    val NrkJazzTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_jazz_title_below_large,
      expressive = null
    )

    val NrkJazzTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_jazz_title_below_on_dark,
      expressive = null
    )

    val NrkJazzTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_jazz_title_below_on_dark_large,
      expressive = null
    )

    val NrkJazzTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_jazz_title_below_on_light,
      expressive = null
    )

    val NrkJazzTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_jazz_title_below_on_light_large,
      expressive = null
    )

    val NrkJazzWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_jazz_with_bg,
      expressive = null
    )

    val NrkJazzWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_jazz_with_bg_large,
      expressive = null
    )

    val NrkKlassiskLogo = NrkIcon(
      normal = R.drawable.nrk_klassisk,
      expressive = null
    )

    val NrkKlassiskLargeLogo = NrkIcon(
      normal = R.drawable.nrk_klassisk_large,
      expressive = null
    )

    val NrkKlassiskOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_klassisk_on_dark,
      expressive = null
    )

    val NrkKlassiskOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_klassisk_on_dark_large,
      expressive = null
    )

    val NrkKlassiskOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_klassisk_on_light,
      expressive = null
    )

    val NrkKlassiskOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_klassisk_on_light_large,
      expressive = null
    )

    val NrkKlassiskTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_klassisk_title_below,
      expressive = null
    )

    val NrkKlassiskTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_klassisk_title_below_large,
      expressive = null
    )

    val NrkKlassiskTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_klassisk_title_below_on_dark,
      expressive = null
    )

    val NrkKlassiskTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_klassisk_title_below_on_dark_large,
      expressive = null
    )

    val NrkKlassiskTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_klassisk_title_below_on_light,
      expressive = null
    )

    val NrkKlassiskTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_klassisk_title_below_on_light_large,
      expressive = null
    )

    val NrkKlassiskWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_klassisk_with_bg,
      expressive = null
    )

    val NrkKlassiskWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_klassisk_with_bg_large,
      expressive = null
    )

    val NrkKringkastingsorkestretLogo = NrkIcon(
      normal = R.drawable.nrk_kringkastingsorkestret,
      expressive = null
    )

    val NrkKringkastingsorkestretLargeLogo = NrkIcon(
      normal = R.drawable.nrk_kringkastingsorkestret_large,
      expressive = null
    )

    val NrkKringkastingsorkestretOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_kringkastingsorkestret_on_dark,
      expressive = null
    )

    val NrkKringkastingsorkestretOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_kringkastingsorkestret_on_dark_large,
      expressive = null
    )

    val NrkKringkastingsorkestretOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_kringkastingsorkestret_on_light,
      expressive = null
    )

    val NrkKringkastingsorkestretOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_kringkastingsorkestret_on_light_large,
      expressive = null
    )

    val NrkKringkastingsorkestretTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_kringkastingsorkestret_title_below,
      expressive = null
    )

    val NrkKringkastingsorkestretTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_kringkastingsorkestret_title_below_large,
      expressive = null
    )

    val NrkKringkastingsorkestretTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_kringkastingsorkestret_title_below_on_dark,
      expressive = null
    )

    val NrkKringkastingsorkestretTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_kringkastingsorkestret_title_below_on_dark_large,
      expressive = null
    )

    val NrkKringkastingsorkestretTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_kringkastingsorkestret_title_below_on_light,
      expressive = null
    )

    val NrkKringkastingsorkestretTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_kringkastingsorkestret_title_below_on_light_large,
      expressive = null
    )

    val NrkKringkastingsorkestretWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_kringkastingsorkestret_with_bg,
      expressive = null
    )

    val NrkKringkastingsorkestretWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_kringkastingsorkestret_with_bg_large,
      expressive = null
    )

    val NrkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_large,
      expressive = null
    )

    val NrkMoreOgRomsdalLogo = NrkIcon(
      normal = R.drawable.nrk_more_og_romsdal,
      expressive = null
    )

    val NrkMoreOgRomsdalLargeLogo = NrkIcon(
      normal = R.drawable.nrk_more_og_romsdal_large,
      expressive = null
    )

    val NrkMoreOgRomsdalOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_more_og_romsdal_on_dark,
      expressive = null
    )

    val NrkMoreOgRomsdalOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_more_og_romsdal_on_dark_large,
      expressive = null
    )

    val NrkMoreOgRomsdalOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_more_og_romsdal_on_light,
      expressive = null
    )

    val NrkMoreOgRomsdalOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_more_og_romsdal_on_light_large,
      expressive = null
    )

    val NrkMoreOgRomsdalTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_more_og_romsdal_title_below,
      expressive = null
    )

    val NrkMoreOgRomsdalTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_more_og_romsdal_title_below_large,
      expressive = null
    )

    val NrkMoreOgRomsdalTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_more_og_romsdal_title_below_on_dark,
      expressive = null
    )

    val NrkMoreOgRomsdalTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_more_og_romsdal_title_below_on_dark_large,
      expressive = null
    )

    val NrkMoreOgRomsdalTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_more_og_romsdal_title_below_on_light,
      expressive = null
    )

    val NrkMoreOgRomsdalTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_more_og_romsdal_title_below_on_light_large,
      expressive = null
    )

    val NrkMoreOgRomsdalWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_more_og_romsdal_with_bg,
      expressive = null
    )

    val NrkMoreOgRomsdalWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_more_og_romsdal_with_bg_large,
      expressive = null
    )

    val NrkMp3Logo = NrkIcon(
      normal = R.drawable.nrk_mp3,
      expressive = null
    )

    val NrkMp3LargeLogo = NrkIcon(
      normal = R.drawable.nrk_mp3_large,
      expressive = null
    )

    val NrkMp3OnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_mp3_on_dark,
      expressive = null
    )

    val NrkMp3OnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_mp3_on_dark_large,
      expressive = null
    )

    val NrkMp3OnLightLogo = NrkIcon(
      normal = R.drawable.nrk_mp3_on_light,
      expressive = null
    )

    val NrkMp3OnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_mp3_on_light_large,
      expressive = null
    )

    val NrkMp3TitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_mp3_title_below,
      expressive = null
    )

    val NrkMp3TitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_mp3_title_below_large,
      expressive = null
    )

    val NrkMp3TitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_mp3_title_below_on_dark,
      expressive = null
    )

    val NrkMp3TitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_mp3_title_below_on_dark_large,
      expressive = null
    )

    val NrkMp3TitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_mp3_title_below_on_light,
      expressive = null
    )

    val NrkMp3TitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_mp3_title_below_on_light_large,
      expressive = null
    )

    val NrkMp3WithBgLogo = NrkIcon(
      normal = R.drawable.nrk_mp3_with_bg,
      expressive = null
    )

    val NrkMp3WithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_mp3_with_bg_large,
      expressive = null
    )

    val NrkNordlandLogo = NrkIcon(
      normal = R.drawable.nrk_nordland,
      expressive = null
    )

    val NrkNordlandLargeLogo = NrkIcon(
      normal = R.drawable.nrk_nordland_large,
      expressive = null
    )

    val NrkNordlandOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_nordland_on_dark,
      expressive = null
    )

    val NrkNordlandOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_nordland_on_dark_large,
      expressive = null
    )

    val NrkNordlandOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_nordland_on_light,
      expressive = null
    )

    val NrkNordlandOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_nordland_on_light_large,
      expressive = null
    )

    val NrkNordlandTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_nordland_title_below,
      expressive = null
    )

    val NrkNordlandTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_nordland_title_below_large,
      expressive = null
    )

    val NrkNordlandTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_nordland_title_below_on_dark,
      expressive = null
    )

    val NrkNordlandTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_nordland_title_below_on_dark_large,
      expressive = null
    )

    val NrkNordlandTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_nordland_title_below_on_light,
      expressive = null
    )

    val NrkNordlandTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_nordland_title_below_on_light_large,
      expressive = null
    )

    val NrkNordlandWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_nordland_with_bg,
      expressive = null
    )

    val NrkNordlandWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_nordland_with_bg_large,
      expressive = null
    )

    val NrkNyheterLogo = NrkIcon(
      normal = R.drawable.nrk_nyheter,
      expressive = null
    )

    val NrkNyheterLargeLogo = NrkIcon(
      normal = R.drawable.nrk_nyheter_large,
      expressive = null
    )

    val NrkNyheterOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_nyheter_on_dark,
      expressive = null
    )

    val NrkNyheterOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_nyheter_on_dark_large,
      expressive = null
    )

    val NrkNyheterOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_nyheter_on_light,
      expressive = null
    )

    val NrkNyheterOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_nyheter_on_light_large,
      expressive = null
    )

    val NrkNyheterTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_nyheter_title_below,
      expressive = null
    )

    val NrkNyheterTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_nyheter_title_below_large,
      expressive = null
    )

    val NrkNyheterTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_nyheter_title_below_on_dark,
      expressive = null
    )

    val NrkNyheterTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_nyheter_title_below_on_dark_large,
      expressive = null
    )

    val NrkNyheterTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_nyheter_title_below_on_light,
      expressive = null
    )

    val NrkNyheterTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_nyheter_title_below_on_light_large,
      expressive = null
    )

    val NrkNyheterWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_nyheter_with_bg,
      expressive = null
    )

    val NrkNyheterWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_nyheter_with_bg_large,
      expressive = null
    )

    val NrkOstfoldLogo = NrkIcon(
      normal = R.drawable.nrk_ostfold,
      expressive = null
    )

    val NrkOstfoldLargeLogo = NrkIcon(
      normal = R.drawable.nrk_ostfold_large,
      expressive = null
    )

    val NrkOstfoldOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_ostfold_on_dark,
      expressive = null
    )

    val NrkOstfoldOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_ostfold_on_dark_large,
      expressive = null
    )

    val NrkOstfoldOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_ostfold_on_light,
      expressive = null
    )

    val NrkOstfoldOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_ostfold_on_light_large,
      expressive = null
    )

    val NrkOstfoldTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_ostfold_title_below,
      expressive = null
    )

    val NrkOstfoldTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_ostfold_title_below_large,
      expressive = null
    )

    val NrkOstfoldTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_ostfold_title_below_on_dark,
      expressive = null
    )

    val NrkOstfoldTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_ostfold_title_below_on_dark_large,
      expressive = null
    )

    val NrkOstfoldTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_ostfold_title_below_on_light,
      expressive = null
    )

    val NrkOstfoldTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_ostfold_title_below_on_light_large,
      expressive = null
    )

    val NrkOstfoldWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_ostfold_with_bg,
      expressive = null
    )

    val NrkOstfoldWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_ostfold_with_bg_large,
      expressive = null
    )

    val NrkP1Logo = NrkIcon(
      normal = R.drawable.nrk_p1,
      expressive = null
    )

    val NrkP1LargeLogo = NrkIcon(
      normal = R.drawable.nrk_p1_large,
      expressive = null
    )

    val NrkP1OnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_p1_on_dark,
      expressive = null
    )

    val NrkP1OnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p1_on_dark_large,
      expressive = null
    )

    val NrkP1OnLightLogo = NrkIcon(
      normal = R.drawable.nrk_p1_on_light,
      expressive = null
    )

    val NrkP1OnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p1_on_light_large,
      expressive = null
    )

    val NrkP1PlussLogo = NrkIcon(
      normal = R.drawable.nrk_p1_pluss,
      expressive = null
    )

    val NrkP1PlussLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p1_pluss_large,
      expressive = null
    )

    val NrkP1PlussOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_p1_pluss_on_dark,
      expressive = null
    )

    val NrkP1PlussOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p1_pluss_on_dark_large,
      expressive = null
    )

    val NrkP1PlussOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_p1_pluss_on_light,
      expressive = null
    )

    val NrkP1PlussOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p1_pluss_on_light_large,
      expressive = null
    )

    val NrkP1PlussTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_p1_pluss_title_below,
      expressive = null
    )

    val NrkP1PlussTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p1_pluss_title_below_large,
      expressive = null
    )

    val NrkP1PlussTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_p1_pluss_title_below_on_dark,
      expressive = null
    )

    val NrkP1PlussTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p1_pluss_title_below_on_dark_large,
      expressive = null
    )

    val NrkP1PlussTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_p1_pluss_title_below_on_light,
      expressive = null
    )

    val NrkP1PlussTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p1_pluss_title_below_on_light_large,
      expressive = null
    )

    val NrkP1PlussWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_p1_pluss_with_bg,
      expressive = null
    )

    val NrkP1PlussWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p1_pluss_with_bg_large,
      expressive = null
    )

    val NrkP1TitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_p1_title_below,
      expressive = null
    )

    val NrkP1TitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p1_title_below_large,
      expressive = null
    )

    val NrkP1TitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_p1_title_below_on_dark,
      expressive = null
    )

    val NrkP1TitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p1_title_below_on_dark_large,
      expressive = null
    )

    val NrkP1TitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_p1_title_below_on_light,
      expressive = null
    )

    val NrkP1TitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p1_title_below_on_light_large,
      expressive = null
    )

    val NrkP1WithBgLogo = NrkIcon(
      normal = R.drawable.nrk_p1_with_bg,
      expressive = null
    )

    val NrkP1WithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p1_with_bg_large,
      expressive = null
    )

    val NrkP2Logo = NrkIcon(
      normal = R.drawable.nrk_p2,
      expressive = null
    )

    val NrkP2LargeLogo = NrkIcon(
      normal = R.drawable.nrk_p2_large,
      expressive = null
    )

    val NrkP2OnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_p2_on_dark,
      expressive = null
    )

    val NrkP2OnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p2_on_dark_large,
      expressive = null
    )

    val NrkP2OnLightLogo = NrkIcon(
      normal = R.drawable.nrk_p2_on_light,
      expressive = null
    )

    val NrkP2OnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p2_on_light_large,
      expressive = null
    )

    val NrkP2TitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_p2_title_below,
      expressive = null
    )

    val NrkP2TitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p2_title_below_large,
      expressive = null
    )

    val NrkP2TitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_p2_title_below_on_dark,
      expressive = null
    )

    val NrkP2TitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p2_title_below_on_dark_large,
      expressive = null
    )

    val NrkP2TitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_p2_title_below_on_light,
      expressive = null
    )

    val NrkP2TitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p2_title_below_on_light_large,
      expressive = null
    )

    val NrkP2WithBgLogo = NrkIcon(
      normal = R.drawable.nrk_p2_with_bg,
      expressive = null
    )

    val NrkP2WithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p2_with_bg_large,
      expressive = null
    )

    val NrkP3Logo = NrkIcon(
      normal = R.drawable.nrk_p3,
      expressive = null
    )

    val NrkP3LargeLogo = NrkIcon(
      normal = R.drawable.nrk_p3_large,
      expressive = null
    )

    val NrkP3MusikkLogo = NrkIcon(
      normal = R.drawable.nrk_p3_musikk,
      expressive = null
    )

    val NrkP3MusikkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p3_musikk_large,
      expressive = null
    )

    val NrkP3MusikkOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_p3_musikk_on_dark,
      expressive = null
    )

    val NrkP3MusikkOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p3_musikk_on_dark_large,
      expressive = null
    )

    val NrkP3MusikkOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_p3_musikk_on_light,
      expressive = null
    )

    val NrkP3MusikkOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p3_musikk_on_light_large,
      expressive = null
    )

    val NrkP3MusikkTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_p3_musikk_title_below,
      expressive = null
    )

    val NrkP3MusikkTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p3_musikk_title_below_large,
      expressive = null
    )

    val NrkP3MusikkTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_p3_musikk_title_below_on_dark,
      expressive = null
    )

    val NrkP3MusikkTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p3_musikk_title_below_on_dark_large,
      expressive = null
    )

    val NrkP3MusikkTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_p3_musikk_title_below_on_light,
      expressive = null
    )

    val NrkP3MusikkTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p3_musikk_title_below_on_light_large,
      expressive = null
    )

    val NrkP3MusikkWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_p3_musikk_with_bg,
      expressive = null
    )

    val NrkP3MusikkWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p3_musikk_with_bg_large,
      expressive = null
    )

    val NrkP3OnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_p3_on_dark,
      expressive = null
    )

    val NrkP3OnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p3_on_dark_large,
      expressive = null
    )

    val NrkP3OnLightLogo = NrkIcon(
      normal = R.drawable.nrk_p3_on_light,
      expressive = null
    )

    val NrkP3OnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p3_on_light_large,
      expressive = null
    )

    val NrkP3TitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_p3_title_below,
      expressive = null
    )

    val NrkP3TitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p3_title_below_large,
      expressive = null
    )

    val NrkP3TitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_p3_title_below_on_dark,
      expressive = null
    )

    val NrkP3TitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p3_title_below_on_dark_large,
      expressive = null
    )

    val NrkP3TitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_p3_title_below_on_light,
      expressive = null
    )

    val NrkP3TitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p3_title_below_on_light_large,
      expressive = null
    )

    val NrkP3WithBgLogo = NrkIcon(
      normal = R.drawable.nrk_p3_with_bg,
      expressive = null
    )

    val NrkP3WithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_p3_with_bg_large,
      expressive = null
    )

    val NrkRadioLogo = NrkIcon(
      normal = R.drawable.nrk_radio,
      expressive = null
    )

    val NrkRadioLargeLogo = NrkIcon(
      normal = R.drawable.nrk_radio_large,
      expressive = null
    )

    val NrkRadioOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_radio_on_dark,
      expressive = null
    )

    val NrkRadioOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_radio_on_dark_large,
      expressive = null
    )

    val NrkRadioOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_radio_on_light,
      expressive = null
    )

    val NrkRadioOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_radio_on_light_large,
      expressive = null
    )

    val NrkRadioTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_radio_title_below,
      expressive = null
    )

    val NrkRadioTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_radio_title_below_large,
      expressive = null
    )

    val NrkRadioTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_radio_title_below_on_dark,
      expressive = null
    )

    val NrkRadioTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_radio_title_below_on_dark_large,
      expressive = null
    )

    val NrkRadioTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_radio_title_below_on_light,
      expressive = null
    )

    val NrkRadioTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_radio_title_below_on_light_large,
      expressive = null
    )

    val NrkRadioWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_radio_with_bg,
      expressive = null
    )

    val NrkRadioWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_radio_with_bg_large,
      expressive = null
    )

    val NrkRogalandLogo = NrkIcon(
      normal = R.drawable.nrk_rogaland,
      expressive = null
    )

    val NrkRogalandLargeLogo = NrkIcon(
      normal = R.drawable.nrk_rogaland_large,
      expressive = null
    )

    val NrkRogalandOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_rogaland_on_dark,
      expressive = null
    )

    val NrkRogalandOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_rogaland_on_dark_large,
      expressive = null
    )

    val NrkRogalandOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_rogaland_on_light,
      expressive = null
    )

    val NrkRogalandOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_rogaland_on_light_large,
      expressive = null
    )

    val NrkRogalandTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_rogaland_title_below,
      expressive = null
    )

    val NrkRogalandTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_rogaland_title_below_large,
      expressive = null
    )

    val NrkRogalandTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_rogaland_title_below_on_dark,
      expressive = null
    )

    val NrkRogalandTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_rogaland_title_below_on_dark_large,
      expressive = null
    )

    val NrkRogalandTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_rogaland_title_below_on_light,
      expressive = null
    )

    val NrkRogalandTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_rogaland_title_below_on_light_large,
      expressive = null
    )

    val NrkRogalandWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_rogaland_with_bg,
      expressive = null
    )

    val NrkRogalandWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_rogaland_with_bg_large,
      expressive = null
    )

    val NrkSamiRadioLogo = NrkIcon(
      normal = R.drawable.nrk_sami_radio,
      expressive = null
    )

    val NrkSamiRadioLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sami_radio_large,
      expressive = null
    )

    val NrkSamiRadioOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_sami_radio_on_dark,
      expressive = null
    )

    val NrkSamiRadioOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sami_radio_on_dark_large,
      expressive = null
    )

    val NrkSamiRadioOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_sami_radio_on_light,
      expressive = null
    )

    val NrkSamiRadioOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sami_radio_on_light_large,
      expressive = null
    )

    val NrkSamiRadioTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_sami_radio_title_below,
      expressive = null
    )

    val NrkSamiRadioTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sami_radio_title_below_large,
      expressive = null
    )

    val NrkSamiRadioTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_sami_radio_title_below_on_dark,
      expressive = null
    )

    val NrkSamiRadioTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sami_radio_title_below_on_dark_large,
      expressive = null
    )

    val NrkSamiRadioTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_sami_radio_title_below_on_light,
      expressive = null
    )

    val NrkSamiRadioTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sami_radio_title_below_on_light_large,
      expressive = null
    )

    val NrkSamiRadioWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_sami_radio_with_bg,
      expressive = null
    )

    val NrkSamiRadioWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sami_radio_with_bg_large,
      expressive = null
    )

    val NrkSapmiLogo = NrkIcon(
      normal = R.drawable.nrk_sapmi,
      expressive = null
    )

    val NrkSapmiLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sapmi_large,
      expressive = null
    )

    val NrkSapmiOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_sapmi_on_dark,
      expressive = null
    )

    val NrkSapmiOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sapmi_on_dark_large,
      expressive = null
    )

    val NrkSapmiOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_sapmi_on_light,
      expressive = null
    )

    val NrkSapmiOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sapmi_on_light_large,
      expressive = null
    )

    val NrkSapmiTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_sapmi_title_below,
      expressive = null
    )

    val NrkSapmiTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sapmi_title_below_large,
      expressive = null
    )

    val NrkSapmiTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_sapmi_title_below_on_dark,
      expressive = null
    )

    val NrkSapmiTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sapmi_title_below_on_dark_large,
      expressive = null
    )

    val NrkSapmiTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_sapmi_title_below_on_light,
      expressive = null
    )

    val NrkSapmiTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sapmi_title_below_on_light_large,
      expressive = null
    )

    val NrkSapmiWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_sapmi_with_bg,
      expressive = null
    )

    val NrkSapmiWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sapmi_with_bg_large,
      expressive = null
    )

    val NrkSorlandetLogo = NrkIcon(
      normal = R.drawable.nrk_sorlandet,
      expressive = null
    )

    val NrkSorlandetLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sorlandet_large,
      expressive = null
    )

    val NrkSorlandetOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_sorlandet_on_dark,
      expressive = null
    )

    val NrkSorlandetOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sorlandet_on_dark_large,
      expressive = null
    )

    val NrkSorlandetOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_sorlandet_on_light,
      expressive = null
    )

    val NrkSorlandetOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sorlandet_on_light_large,
      expressive = null
    )

    val NrkSorlandetTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_sorlandet_title_below,
      expressive = null
    )

    val NrkSorlandetTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sorlandet_title_below_large,
      expressive = null
    )

    val NrkSorlandetTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_sorlandet_title_below_on_dark,
      expressive = null
    )

    val NrkSorlandetTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sorlandet_title_below_on_dark_large,
      expressive = null
    )

    val NrkSorlandetTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_sorlandet_title_below_on_light,
      expressive = null
    )

    val NrkSorlandetTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sorlandet_title_below_on_light_large,
      expressive = null
    )

    val NrkSorlandetWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_sorlandet_with_bg,
      expressive = null
    )

    val NrkSorlandetWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sorlandet_with_bg_large,
      expressive = null
    )

    val NrkSportLogo = NrkIcon(
      normal = R.drawable.nrk_sport,
      expressive = null
    )

    val NrkSportLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sport_large,
      expressive = null
    )

    val NrkSportOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_sport_on_dark,
      expressive = null
    )

    val NrkSportOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sport_on_dark_large,
      expressive = null
    )

    val NrkSportOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_sport_on_light,
      expressive = null
    )

    val NrkSportOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sport_on_light_large,
      expressive = null
    )

    val NrkSportTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_sport_title_below,
      expressive = null
    )

    val NrkSportTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sport_title_below_large,
      expressive = null
    )

    val NrkSportTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_sport_title_below_on_dark,
      expressive = null
    )

    val NrkSportTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sport_title_below_on_dark_large,
      expressive = null
    )

    val NrkSportTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_sport_title_below_on_light,
      expressive = null
    )

    val NrkSportTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sport_title_below_on_light_large,
      expressive = null
    )

    val NrkSportWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_sport_with_bg,
      expressive = null
    )

    val NrkSportWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_sport_with_bg_large,
      expressive = null
    )

    val NrkStorOsloLogo = NrkIcon(
      normal = R.drawable.nrk_stor_oslo,
      expressive = null
    )

    val NrkStorOsloLargeLogo = NrkIcon(
      normal = R.drawable.nrk_stor_oslo_large,
      expressive = null
    )

    val NrkStorOsloOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_stor_oslo_on_dark,
      expressive = null
    )

    val NrkStorOsloOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_stor_oslo_on_dark_large,
      expressive = null
    )

    val NrkStorOsloOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_stor_oslo_on_light,
      expressive = null
    )

    val NrkStorOsloOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_stor_oslo_on_light_large,
      expressive = null
    )

    val NrkStorOsloTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_stor_oslo_title_below,
      expressive = null
    )

    val NrkStorOsloTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_stor_oslo_title_below_large,
      expressive = null
    )

    val NrkStorOsloTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_stor_oslo_title_below_on_dark,
      expressive = null
    )

    val NrkStorOsloTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_stor_oslo_title_below_on_dark_large,
      expressive = null
    )

    val NrkStorOsloTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_stor_oslo_title_below_on_light,
      expressive = null
    )

    val NrkStorOsloTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_stor_oslo_title_below_on_light_large,
      expressive = null
    )

    val NrkStorOsloWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_stor_oslo_with_bg,
      expressive = null
    )

    val NrkStorOsloWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_stor_oslo_with_bg_large,
      expressive = null
    )

    val NrkSuperLogo = NrkIcon(
      normal = R.drawable.nrk_super,
      expressive = null
    )

    val NrkSuperLargeLogo = NrkIcon(
      normal = R.drawable.nrk_super_large,
      expressive = null
    )

    val NrkSuperOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_super_on_dark,
      expressive = null
    )

    val NrkSuperOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_super_on_dark_large,
      expressive = null
    )

    val NrkSuperOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_super_on_light,
      expressive = null
    )

    val NrkSuperOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_super_on_light_large,
      expressive = null
    )

    val NrkSuperSymbolLogo = NrkIcon(
      normal = R.drawable.nrk_super_symbol,
      expressive = null
    )

    val NrkSuperTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_super_title_below,
      expressive = null
    )

    val NrkSuperTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_super_title_below_large,
      expressive = null
    )

    val NrkSuperTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_super_title_below_on_dark,
      expressive = null
    )

    val NrkSuperTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_super_title_below_on_dark_large,
      expressive = null
    )

    val NrkSuperTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_super_title_below_on_light,
      expressive = null
    )

    val NrkSuperTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_super_title_below_on_light_large,
      expressive = null
    )

    val NrkSuperWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_super_with_bg,
      expressive = null
    )

    val NrkSuperWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_super_with_bg_large,
      expressive = null
    )

    val NrkTegnspraakLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak,
      expressive = null
    )

    val NrkTegnspraakLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_large,
      expressive = null
    )

    val NrkTegnspraakOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_on_dark,
      expressive = null
    )

    val NrkTegnspraakOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_on_dark_large,
      expressive = null
    )

    val NrkTegnspraakOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_on_light,
      expressive = null
    )

    val NrkTegnspraakOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_on_light_large,
      expressive = null
    )

    val NrkTegnspraakSymbolLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_symbol,
      expressive = null
    )

    val NrkTegnspraakSymbolLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_symbol_large,
      expressive = null
    )

    val NrkTegnspraakSymbolOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_symbol_on_dark,
      expressive = null
    )

    val NrkTegnspraakSymbolOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_symbol_on_dark_large,
      expressive = null
    )

    val NrkTegnspraakSymbolOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_symbol_on_light,
      expressive = null
    )

    val NrkTegnspraakSymbolOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_symbol_on_light_large,
      expressive = null
    )

    val NrkTegnspraakSymbolWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_symbol_with_bg,
      expressive = null
    )

    val NrkTegnspraakSymbolWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_symbol_with_bg_large,
      expressive = null
    )

    val NrkTegnspraakTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_title_below,
      expressive = null
    )

    val NrkTegnspraakTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_title_below_large,
      expressive = null
    )

    val NrkTegnspraakTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_title_below_on_dark,
      expressive = null
    )

    val NrkTegnspraakTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_title_below_on_dark_large,
      expressive = null
    )

    val NrkTegnspraakTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_title_below_on_light,
      expressive = null
    )

    val NrkTegnspraakTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_title_below_on_light_large,
      expressive = null
    )

    val NrkTegnspraakWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_with_bg,
      expressive = null
    )

    val NrkTegnspraakWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tegnspraak_with_bg_large,
      expressive = null
    )

    val NrkTrafikkLogo = NrkIcon(
      normal = R.drawable.nrk_trafikk,
      expressive = null
    )

    val NrkTrafikkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_trafikk_large,
      expressive = null
    )

    val NrkTrafikkOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_trafikk_on_dark,
      expressive = null
    )

    val NrkTrafikkOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_trafikk_on_dark_large,
      expressive = null
    )

    val NrkTrafikkOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_trafikk_on_light,
      expressive = null
    )

    val NrkTrafikkOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_trafikk_on_light_large,
      expressive = null
    )

    val NrkTrafikkTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_trafikk_title_below,
      expressive = null
    )

    val NrkTrafikkTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_trafikk_title_below_large,
      expressive = null
    )

    val NrkTrafikkTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_trafikk_title_below_on_dark,
      expressive = null
    )

    val NrkTrafikkTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_trafikk_title_below_on_dark_large,
      expressive = null
    )

    val NrkTrafikkTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_trafikk_title_below_on_light,
      expressive = null
    )

    val NrkTrafikkTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_trafikk_title_below_on_light_large,
      expressive = null
    )

    val NrkTrafikkWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_trafikk_with_bg,
      expressive = null
    )

    val NrkTrafikkWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_trafikk_with_bg_large,
      expressive = null
    )

    val NrkTromsLogo = NrkIcon(
      normal = R.drawable.nrk_troms,
      expressive = null
    )

    val NrkTromsLargeLogo = NrkIcon(
      normal = R.drawable.nrk_troms_large,
      expressive = null
    )

    val NrkTromsOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_troms_on_dark,
      expressive = null
    )

    val NrkTromsOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_troms_on_dark_large,
      expressive = null
    )

    val NrkTromsOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_troms_on_light,
      expressive = null
    )

    val NrkTromsOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_troms_on_light_large,
      expressive = null
    )

    val NrkTromsTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_troms_title_below,
      expressive = null
    )

    val NrkTromsTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_troms_title_below_large,
      expressive = null
    )

    val NrkTromsTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_troms_title_below_on_dark,
      expressive = null
    )

    val NrkTromsTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_troms_title_below_on_dark_large,
      expressive = null
    )

    val NrkTromsTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_troms_title_below_on_light,
      expressive = null
    )

    val NrkTromsTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_troms_title_below_on_light_large,
      expressive = null
    )

    val NrkTromsWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_troms_with_bg,
      expressive = null
    )

    val NrkTromsWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_troms_with_bg_large,
      expressive = null
    )

    val NrkTrondelagLogo = NrkIcon(
      normal = R.drawable.nrk_trondelag,
      expressive = null
    )

    val NrkTrondelagLargeLogo = NrkIcon(
      normal = R.drawable.nrk_trondelag_large,
      expressive = null
    )

    val NrkTrondelagOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_trondelag_on_dark,
      expressive = null
    )

    val NrkTrondelagOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_trondelag_on_dark_large,
      expressive = null
    )

    val NrkTrondelagOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_trondelag_on_light,
      expressive = null
    )

    val NrkTrondelagOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_trondelag_on_light_large,
      expressive = null
    )

    val NrkTrondelagTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_trondelag_title_below,
      expressive = null
    )

    val NrkTrondelagTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_trondelag_title_below_large,
      expressive = null
    )

    val NrkTrondelagTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_trondelag_title_below_on_dark,
      expressive = null
    )

    val NrkTrondelagTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_trondelag_title_below_on_dark_large,
      expressive = null
    )

    val NrkTrondelagTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_trondelag_title_below_on_light,
      expressive = null
    )

    val NrkTrondelagTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_trondelag_title_below_on_light_large,
      expressive = null
    )

    val NrkTrondelagWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_trondelag_with_bg,
      expressive = null
    )

    val NrkTrondelagWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_trondelag_with_bg_large,
      expressive = null
    )

    val NrkTvLogo = NrkIcon(
      normal = R.drawable.nrk_tv,
      expressive = null
    )

    val NrkTvLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tv_large,
      expressive = null
    )

    val NrkTvOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_tv_on_dark,
      expressive = null
    )

    val NrkTvOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tv_on_dark_large,
      expressive = null
    )

    val NrkTvOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_tv_on_light,
      expressive = null
    )

    val NrkTvOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tv_on_light_large,
      expressive = null
    )

    val NrkTvTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_tv_title_below,
      expressive = null
    )

    val NrkTvTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tv_title_below_large,
      expressive = null
    )

    val NrkTvTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_tv_title_below_on_dark,
      expressive = null
    )

    val NrkTvTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tv_title_below_on_dark_large,
      expressive = null
    )

    val NrkTvTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_tv_title_below_on_light,
      expressive = null
    )

    val NrkTvTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tv_title_below_on_light_large,
      expressive = null
    )

    val NrkTvWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_tv_with_bg,
      expressive = null
    )

    val NrkTvWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_tv_with_bg_large,
      expressive = null
    )

    val NrkVestfoldOgTelemarkLogo = NrkIcon(
      normal = R.drawable.nrk_vestfold_og_telemark,
      expressive = null
    )

    val NrkVestfoldOgTelemarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_vestfold_og_telemark_large,
      expressive = null
    )

    val NrkVestfoldOgTelemarkOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_vestfold_og_telemark_on_dark,
      expressive = null
    )

    val NrkVestfoldOgTelemarkOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_vestfold_og_telemark_on_dark_large,
      expressive = null
    )

    val NrkVestfoldOgTelemarkOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_vestfold_og_telemark_on_light,
      expressive = null
    )

    val NrkVestfoldOgTelemarkOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_vestfold_og_telemark_on_light_large,
      expressive = null
    )

    val NrkVestfoldOgTelemarkTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_vestfold_og_telemark_title_below,
      expressive = null
    )

    val NrkVestfoldOgTelemarkTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_vestfold_og_telemark_title_below_large,
      expressive = null
    )

    val NrkVestfoldOgTelemarkTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_vestfold_og_telemark_title_below_on_dark,
      expressive = null
    )

    val NrkVestfoldOgTelemarkTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_vestfold_og_telemark_title_below_on_dark_large,
      expressive = null
    )

    val NrkVestfoldOgTelemarkTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_vestfold_og_telemark_title_below_on_light,
      expressive = null
    )

    val NrkVestfoldOgTelemarkTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_vestfold_og_telemark_title_below_on_light_large,
      expressive = null
    )

    val NrkVestfoldOgTelemarkWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_vestfold_og_telemark_with_bg,
      expressive = null
    )

    val NrkVestfoldOgTelemarkWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_vestfold_og_telemark_with_bg_large,
      expressive = null
    )

    val NrkVestlandLogo = NrkIcon(
      normal = R.drawable.nrk_vestland,
      expressive = null
    )

    val NrkVestlandLargeLogo = NrkIcon(
      normal = R.drawable.nrk_vestland_large,
      expressive = null
    )

    val NrkVestlandOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_vestland_on_dark,
      expressive = null
    )

    val NrkVestlandOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_vestland_on_dark_large,
      expressive = null
    )

    val NrkVestlandOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_vestland_on_light,
      expressive = null
    )

    val NrkVestlandOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_vestland_on_light_large,
      expressive = null
    )

    val NrkVestlandTitleBelowLogo = NrkIcon(
      normal = R.drawable.nrk_vestland_title_below,
      expressive = null
    )

    val NrkVestlandTitleBelowLargeLogo = NrkIcon(
      normal = R.drawable.nrk_vestland_title_below_large,
      expressive = null
    )

    val NrkVestlandTitleBelowOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_vestland_title_below_on_dark,
      expressive = null
    )

    val NrkVestlandTitleBelowOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_vestland_title_below_on_dark_large,
      expressive = null
    )

    val NrkVestlandTitleBelowOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_vestland_title_below_on_light,
      expressive = null
    )

    val NrkVestlandTitleBelowOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_vestland_title_below_on_light_large,
      expressive = null
    )

    val NrkVestlandWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_vestland_with_bg,
      expressive = null
    )

    val NrkVestlandWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_vestland_with_bg_large,
      expressive = null
    )

    val NrkWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_with_bg,
      expressive = null
    )

    val NrkWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_with_bg_large,
      expressive = null
    )

    val NrkYrRadioLogo = NrkIcon(
      normal = R.drawable.nrk_yr_radio,
      expressive = null
    )

    val NrkYrRadioLargeLogo = NrkIcon(
      normal = R.drawable.nrk_yr_radio_large,
      expressive = null
    )

    val NrkYrRadioOnDarkLogo = NrkIcon(
      normal = R.drawable.nrk_yr_radio_on_dark,
      expressive = null
    )

    val NrkYrRadioOnDarkLargeLogo = NrkIcon(
      normal = R.drawable.nrk_yr_radio_on_dark_large,
      expressive = null
    )

    val NrkYrRadioOnLightLogo = NrkIcon(
      normal = R.drawable.nrk_yr_radio_on_light,
      expressive = null
    )

    val NrkYrRadioOnLightLargeLogo = NrkIcon(
      normal = R.drawable.nrk_yr_radio_on_light_large,
      expressive = null
    )

    val NrkYrRadioWithBgLogo = NrkIcon(
      normal = R.drawable.nrk_yr_radio_with_bg,
      expressive = null
    )

    val NrkYrRadioWithBgLargeLogo = NrkIcon(
      normal = R.drawable.nrk_yr_radio_with_bg_large,
      expressive = null
    )

    val YrLogo = NrkIcon(
      normal = R.drawable.yr,
      expressive = null
    )

    val YrBlackwhiteLogo = NrkIcon(
      normal = R.drawable.yr_blackwhite,
      expressive = null
    )

    val YrColorLogo = NrkIcon(
      normal = R.drawable.yr_color,
      expressive = null
    )
}
