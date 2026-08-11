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

  val CircleInCircleIcon = NrkIcon(
    normal = R.drawable.circle_in_circle,
    expressive = null
  )

  val CircleInCircleSolidIcon = NrkIcon(
    normal = R.drawable.circle_in_circle_solid,
    expressive = null
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
}
