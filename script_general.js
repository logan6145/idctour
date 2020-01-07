(function(){
	var script = {
 "data": {
  "name": "Player486"
 },
 "defaultVRPointer": "laser",
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "downloadEnabled": false,
 "buttonToggleFullscreen": "this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4",
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "start": "this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4].forEach(function(component) { component.set('visible', false); }) }",
 "left": 398.6,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "borderSize": 0,
 "horizontalAlign": "left",
 "overflow": "hidden",
 "paddingBottom": 0,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487",
  "this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839",
  "this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8",
  "this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0",
  "this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9",
  "this.MapViewer",
  "this.MapViewer_mobile",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "minHeight": 20,
 "width": "100%",
 "height": "100%",
 "paddingLeft": 0,
 "paddingTop": 0,
 "definitions": [{
 "cursor": "hand",
 "rollOverIconURL": "skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_rollover.png",
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "width": 46,
 "borderRadius": 0,
 "maxWidth": 46,
 "horizontalAlign": "center",
 "maxHeight": 46,
 "borderSize": 0,
 "height": 46,
 "paddingBottom": 0,
 "id": "IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6",
 "verticalAlign": "middle",
 "class": "IconButton",
 "minHeight": 1,
 "pressedIconURL": "skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "push",
 "minWidth": 1,
 "propagateClick": false,
 "iconURL": "skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6.png",
 "paddingRight": 0,
 "data": {
  "name": "VR"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "toolTipBorderColor": "#767676",
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowColor": "#333333",
 "toolTipShadowOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "rollOverIconURL": "skin/IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_rollover.png",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "toolTipShadowHorizontalLength": 0,
 "toolTip": "Fullscreen",
 "transparencyActive": true,
 "maxWidth": 46,
 "toolTipShadowSpread": 0,
 "backgroundOpacity": 0,
 "width": 46,
 "borderRadius": 0,
 "toolTipFontSize": 12,
 "horizontalAlign": "center",
 "maxHeight": 46,
 "toolTipBorderRadius": 3,
 "borderSize": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": 46,
 "paddingBottom": 0,
 "id": "IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4",
 "toolTipPaddingLeft": 6,
 "verticalAlign": "middle",
 "class": "IconButton",
 "toolTipShadowVerticalLength": 0,
 "minHeight": 1,
 "toolTipTextShadowOpacity": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingTop": 4,
 "mode": "toggle",
 "minWidth": 1,
 "toolTipShadowBlurRadius": 3,
 "propagateClick": false,
 "toolTipFontColor": "#606060",
 "toolTipOpacity": 1,
 "iconURL": "skin/IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4.png",
 "toolTipDisplayTime": 600,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "data": {
  "name": "fullscreen"
 },
 "shadow": false
},
{
 "toolTipShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "vrPointerColor": "#FFFFFF",
 "borderRadius": 0,
 "toolTipFontSize": "1.11vmin",
 "vrPointerSelectionColor": "#FF6600",
 "progressBarOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingBottom": 0,
 "progressBorderSize": 0,
 "toolTipPaddingLeft": 6,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "vrPointerSelectionTime": 2000,
 "toolTipPaddingRight": 6,
 "progressBorderRadius": 0,
 "firstTransitionDuration": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "displayTooltipInTouchScreens": true,
 "paddingLeft": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBottom": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "toolTipDisplayTime": 600,
 "progressHeight": 10,
 "playbackBarBottom": 5,
 "progressBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadHeight": 15,
 "toolTipShadowSpread": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadWidth": 6,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "width": "100%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderColor": "#000000",
 "toolTipBorderRadius": 3,
 "playbackBarRight": 0,
 "playbackBarBorderSize": 0,
 "height": "100%",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "id": "MainViewer",
 "minHeight": 50,
 "toolTipTextShadowOpacity": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadOpacity": 1,
 "toolTipBorderSize": 1,
 "paddingTop": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressRight": 0,
 "minWidth": 100,
 "propagateClick": false,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressOpacity": 1,
 "shadow": false,
 "toolTipPaddingTop": 4,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "toolTipOpacity": 1
},
{
 "scrollBarWidth": 10,
 "left": "1%",
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "right": "1%",
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "maxWidth": 800,
 "backgroundOpacity": 0.9,
 "borderRadius": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#534741"
 ],
 "borderSize": 0,
 "children": [
  "this.Container_1185BA07_1C82_BB09_4190_3425ACEF39CF",
  "this.Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36",
  "this.Container_129084CF_1C83_AF18_418C_2D8031993BE6"
 ],
 "height": 50,
 "overflow": "scroll",
 "paddingBottom": 0,
 "id": "Container_10BF264C_1C81_AB18_418E_C228A2BBA487",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "class": "Container",
 "minHeight": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "gap": 10,
 "propagateClick": false,
 "bottom": 20,
 "backgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingRight": 0,
 "data": {
  "name": "SETTINGS"
 }
},
{
 "scrollBarWidth": 10,
 "left": "25%",
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "right": "25%",
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "contentOpaque": false,
 "horizontalAlign": "center",
 "borderSize": 0,
 "children": [
  "this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44",
  "this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396",
  "this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64",
  "this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF",
  "this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A",
  "this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793",
  "this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6"
 ],
 "height": "100%",
 "overflow": "scroll",
 "paddingBottom": 0,
 "id": "Container_129084CF_1C83_AF18_418C_2D8031993BE6",
 "verticalAlign": "middle",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "minHeight": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "top": "0%",
 "gap": 0,
 "propagateClick": false,
 "data": {
  "name": "Center"
 },
 "paddingRight": 0,
 "shadow": false
},
{
 "cursor": "hand",
 "rollOverIconURL": "skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_rollover.png",
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "width": 46,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "borderSize": 0,
 "height": 46,
 "paddingBottom": 0,
 "id": "IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64",
 "verticalAlign": "middle",
 "class": "IconButton",
 "minHeight": 0,
 "pressedIconURL": "skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "push",
 "minWidth": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64.png",
 "paddingRight": 0,
 "data": {
  "name": "Up"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "left": "40%",
 "right": "40%",
 "rollOverIconURL": "skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_rollover.png",
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 46,
 "horizontalAlign": "center",
 "maxHeight": 46,
 "borderSize": 0,
 "height": 46,
 "paddingBottom": 0,
 "id": "IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8",
 "click": "this.setComponentVisibility(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9, false, 0, this.effect_307F1ACA_231D_F4CC_41B6_DE1D97EDB043, 'hideEffect', false); this.setComponentVisibility(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8, false, 0, this.effect_307F1ACA_231D_F4CC_41B6_DE1D97EDB043, 'hideEffect', false); this.setComponentVisibility(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0, false, 0, this.effect_307F1ACA_231D_F4CC_41B6_DE1D97EDB043, 'hideEffect', false)",
 "verticalAlign": "middle",
 "class": "IconButton",
 "minHeight": 1,
 "visible": false,
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "push",
 "minWidth": 1,
 "propagateClick": false,
 "bottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8.png",
 "paddingRight": 0,
 "data": {
  "name": "-Expand"
 }
},
{
 "id": "effect_3061B548_231D_5DCD_41B4_93FF66204E67",
 "class": "FadeInEffect",
 "easing": "linear",
 "duration": 100
},
{
 "paddingRight": 14,
 "scrollBarWidth": 5,
 "left": "1%",
 "itemLabelFontFamily": "Arial",
 "scrollBarColor": "#FFFFFF",
 "itemOpacity": 1,
 "scrollBarOpacity": 0,
 "itemPaddingRight": 3,
 "rollOverItemLabelFontColor": "#FFFFFF",
 "right": "1%",
 "selectedItemBackgroundColor": [
  "#534741"
 ],
 "itemBorderRadius": 0,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontSize": "12px",
 "borderRadius": 0,
 "itemHorizontalAlign": "center",
 "backgroundColor": [
  "#534741"
 ],
 "rollOverItemLabelFontWeight": "normal",
 "playList": "this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "itemLabelTextDecoration": "none",
 "itemPaddingLeft": 3,
 "itemBackgroundOpacity": 0,
 "selectedItemBackgroundColorRatios": [
  0
 ],
 "selectedItemBorderColor": "#FFFFFF",
 "paddingLeft": 14,
 "scrollBarMargin": 0,
 "layout": "horizontal",
 "gap": 10,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelHorizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "bottom": 70,
 "itemPaddingTop": 3,
 "selectedItemLabelFontColor": "#FFFFFF",
 "itemBackgroundColorDirection": "vertical",
 "itemLabelFontStyle": "normal",
 "itemLabelFontColor": "#999999",
 "itemPaddingBottom": 3,
 "itemVerticalAlign": "middle",
 "itemLabelFontWeight": "normal",
 "maxWidth": 800,
 "itemThumbnailBorderRadius": 0,
 "backgroundOpacity": 0.9,
 "rollOverItemBackgroundOpacity": 0,
 "selectedItemBackgroundOpacity": 0.9,
 "selectedItemBorderSize": 2,
 "itemThumbnailWidth": 120,
 "borderSize": 0,
 "id": "ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839",
 "itemThumbnailShadow": false,
 "class": "ThumbnailList",
 "minHeight": 20,
 "itemLabelGap": 8,
 "itemMode": "normal",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "itemThumbnailHeight": 70,
 "minWidth": 20,
 "propagateClick": false,
 "itemLabelPosition": "bottom",
 "data": {
  "name": "THUMBNAIL LIST"
 },
 "shadow": false,
 "itemThumbnailOpacity": 1
},
{
 "id": "ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist",
 "items": [
  {
   "camera": "this.panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist, 0, 1)",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_playlist, 1, 0)",
   "class": "PanoramaPlayListItem"
  }
 ],
 "class": "PlayList"
},
{
 "cursor": "hand",
 "rollOverIconURL": "skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_rollover.png",
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "width": 46,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "borderSize": 0,
 "height": 46,
 "paddingBottom": 0,
 "id": "IconButton_128BCB90_1C86_7907_41B3_46B5B135C181",
 "click": "this.setComponentVisibility(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839, false, 0, this.effect_0A30489F_1C86_6738_41A8_2722230A2E2F, 'hideEffect', false); this.setComponentVisibility(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487, false, 0, this.effect_0A30489F_1C86_6738_41A8_2722230A2E2F, 'hideEffect', false); this.setComponentVisibility(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9, true, 0, this.effect_3061B548_231D_5DCD_41B4_93FF66204E67, 'showEffect', false); this.setComponentVisibility(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8, true, 0, this.effect_3061B548_231D_5DCD_41B4_93FF66204E67, 'showEffect', false); this.setComponentVisibility(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0, true, 0, this.effect_3061B548_231D_5DCD_41B4_93FF66204E67, 'showEffect', false)",
 "verticalAlign": "middle",
 "class": "IconButton",
 "minHeight": 0,
 "pressedIconURL": "skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "push",
 "minWidth": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181.png",
 "paddingRight": 0,
 "data": {
  "name": "Collapse"
 },
 "shadow": false
},
{
 "id": "audio_6B268B0C_7EE1_0863_41DA_9C9B92EDF860",
 "class": "MediaAudio",
 "data": {
  "label": "2369"
 },
 "audio": {
  "oggUrl": "media/audio_6B268B0C_7EE1_0863_41DA_9C9B92EDF860.ogg",
  "mp3Url": "media/audio_6B268B0C_7EE1_0863_41DA_9C9B92EDF860.mp3",
  "class": "AudioResource"
 },
 "autoplay": true
},
{
 "headerBackgroundOpacity": 1,
 "titleFontStyle": "normal",
 "scrollBarWidth": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarColor": "#000000",
 "closeButtonBackgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconHeight": 12,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "headerPaddingBottom": 10,
 "scrollBarOpacity": 0.5,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "modal": true,
 "borderRadius": 5,
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "overflow": "scroll",
 "titlePaddingTop": 5,
 "children": [
  "this.htmlText_6B9BDAC0_7E9F_09E3_41D5_F22FB183A407",
  "this.container_5A38AA2B_7F9F_08A5_41C9_065613135F6D"
 ],
 "backgroundColor": [],
 "paddingBottom": 0,
 "bodyBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "scrollBarVisible": "rollOver",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "title": "Indian Green Parrot",
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "gap": 10,
 "backgroundColorRatios": [],
 "layout": "vertical",
 "veilOpacity": 0.4,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingLeft": 5,
 "headerBorderColor": "#000000",
 "bodyBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowColor": "#000000",
 "titleFontColor": "#000000",
 "titleFontSize": "1.29vmin",
 "titlePaddingBottom": 5,
 "shadowBlurRadius": 6,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "width": 400,
 "bodyPaddingRight": 5,
 "titleTextDecoration": "none",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "titleFontFamily": "Arial",
 "closeButtonBorderRadius": 11,
 "borderSize": 0,
 "bodyPaddingTop": 5,
 "height": 500,
 "bodyPaddingBottom": 5,
 "shadowOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "class": "Window",
 "id": "window_6B9D1AC0_7E9F_09E3_41A4_FEB98D562129",
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "footerHeight": 5,
 "bodyBorderColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingTop": 0,
 "closeButtonBackgroundColor": [],
 "backgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "close": "this.playList_5A380A2B_7F9F_08A5_41CB_D9890C6A1C17.set('selectedIndex', -1);; this.stopGlobalAudio(this.audio_6B268B0C_7EE1_0863_41DA_9C9B92EDF860)",
 "data": {
  "name": "Window14272"
 },
 "titlePaddingRight": 5,
 "closeButtonIconWidth": 12,
 "headerBorderSize": 0,
 "headerVerticalAlign": "middle",
 "paddingRight": 0,
 "shadow": true
},
{
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained",
 "buttonZoomOut": "this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793",
 "viewerArea": "this.MapViewer",
 "buttonZoomIn": "this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A"
},
{
 "id": "photo_5CE74899_7EE1_0865_41CB_E8AB0850485C",
 "height": 2204,
 "label": "Silver_Vine_(Scindapsus_pictus)_1",
 "thumbnailUrl": "media/photo_5CE74899_7EE1_0865_41CB_E8AB0850485C_t.jpg",
 "class": "Photo",
 "width": 3920,
 "image": {
  "levels": [
   {
    "url": "media/photo_5CE74899_7EE1_0865_41CB_E8AB0850485C.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "duration": 5000
},
{
 "id": "playList_5A35FA2D_7F9F_08BD_41D7_1C7385047313",
 "items": [
  {
   "class": "MapPlayListItem",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "player": "this.MapViewerMapPlayer",
   "media": "this.map_5B1858FD_7FA1_099D_41D6_13AE45C8A27B"
  }
 ],
 "class": "PlayList"
},
{
 "id": "ImageResource_6984E788_7EE3_3863_41C6_CBF3DA137D5A",
 "class": "ImageResource",
 "levels": [
  {
   "width": 1500,
   "height": 750,
   "url": "media/popup_6A01F320_7EE1_18A3_41C2_66472B7D114F_0_0.png",
   "class": "ImageResourceLevel"
  },
  {
   "width": 1024,
   "height": 512,
   "url": "media/popup_6A01F320_7EE1_18A3_41C2_66472B7D114F_0_1.png",
   "class": "ImageResourceLevel"
  },
  {
   "width": 512,
   "height": 256,
   "url": "media/popup_6A01F320_7EE1_18A3_41C2_66472B7D114F_0_2.png",
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "cursor": "hand",
 "iconURL": "skin/IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9.png",
 "right": "1%",
 "transparencyActive": true,
 "maxWidth": 46,
 "backgroundOpacity": 0,
 "width": 92,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "maxHeight": 46,
 "borderSize": 0,
 "paddingBottom": 0,
 "id": "IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9",
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, 1)",
 "verticalAlign": "middle",
 "class": "IconButton",
 "minHeight": 1,
 "visible": false,
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "push",
 "minWidth": 1,
 "top": "35%",
 "propagateClick": false,
 "bottom": "35%",
 "shadow": false,
 "paddingRight": 0,
 "data": {
  "name": "-next"
 }
},
{
 "cursor": "hand",
 "rollOverIconURL": "skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_rollover.png",
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "width": 46,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "borderSize": 0,
 "height": 46,
 "paddingBottom": 0,
 "id": "IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396",
 "verticalAlign": "middle",
 "class": "IconButton",
 "minHeight": 0,
 "pressedIconURL": "skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "push",
 "minWidth": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396.png",
 "paddingRight": 0,
 "data": {
  "name": "Right"
 },
 "shadow": false
},
{
 "id": "map_5B1858FD_7FA1_099D_41D6_13AE45C8A27B",
 "width": 1920,
 "minimumZoomFactor": 0.5,
 "maximumZoomFactor": 1.2,
 "label": "IDC Floor plan sample",
 "height": 1440,
 "class": "Map",
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayInsideColor": "#0066CC",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "thumbnailUrl": "media/map_5B1858FD_7FA1_099D_41D6_13AE45C8A27B_t.jpg",
 "fieldOfViewOverlayRadiusScale": 0.16,
 "image": {
  "levels": [
   {
    "width": 1920,
    "height": 1440,
    "url": "media/map_5B1858FD_7FA1_099D_41D6_13AE45C8A27B.jpeg",
    "class": "ImageResourceLevel"
   },
   {
    "width": 295,
    "tags": "preload",
    "height": 222,
    "url": "media/map_5B1858FD_7FA1_099D_41D6_13AE45C8A27B_lq.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "overlays": [
  "this.overlay_5C5392E6_7FA1_39AF_41C4_E1BF00C8B2A4",
  "this.overlay_592155CE_7FAF_3BFF_41A8_CF58AA760950"
 ]
},
{
 "cursor": "hand",
 "rollOverIconURL": "skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_rollover.png",
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "width": 46,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "borderSize": 0,
 "height": 46,
 "paddingBottom": 0,
 "id": "IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421",
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, 1)",
 "verticalAlign": "middle",
 "class": "IconButton",
 "minHeight": 0,
 "pressedIconURL": "skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "push",
 "minWidth": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421.png",
 "paddingRight": 0,
 "data": {
  "name": "Next"
 },
 "shadow": false
},
{
 "id": "effect_307F1ACA_231D_F4CC_41B6_DE1D97EDB043",
 "class": "FadeOutEffect",
 "easing": "linear",
 "duration": 100
},
{
 "id": "effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7",
 "class": "FadeInEffect",
 "easing": "linear",
 "duration": 200
},
{
 "cursor": "hand",
 "left": "1%",
 "iconURL": "skin/IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0.png",
 "transparencyActive": true,
 "maxWidth": 46,
 "backgroundOpacity": 0,
 "width": 92,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "maxHeight": 46,
 "borderSize": 0,
 "paddingBottom": 0,
 "id": "IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0",
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, -1)",
 "verticalAlign": "middle",
 "class": "IconButton",
 "minHeight": 1,
 "visible": false,
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "push",
 "minWidth": 1,
 "top": "35%",
 "propagateClick": false,
 "bottom": "35%",
 "shadow": false,
 "paddingRight": 0,
 "data": {
  "name": "-previous"
 }
},
{
 "id": "camera_5A249A3E_7F9F_089F_41C3_39B21A310B83",
 "initialPosition": {
  "yaw": -55.59,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticRotationSpeed": 0,
 "initialSequence": "this.sequence_5A24AA3E_7F9F_089F_41C9_E2162574F889",
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "headerBackgroundOpacity": 1,
 "titleFontStyle": "normal",
 "scrollBarWidth": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1,
  1,
  1
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarColor": "#000000",
 "closeButtonPaddingBottom": 0,
 "closeButtonBackgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingRight": 0,
 "closeButtonIconHeight": 12,
 "closeButtonBorderSize": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "headerPaddingBottom": 10,
 "scrollBarOpacity": 0.5,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "modal": true,
 "borderRadius": 5,
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "overflow": "scroll",
 "titlePaddingTop": 5,
 "children": [
  "this.htmlText_6A5D0240_7EA3_38E3_41DC_7C1320D710FE",
  "this.image_uid5A398A2A_7F9F_08A7_419E_3B433B0806E5_1"
 ],
 "backgroundColor": [],
 "closeButtonBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "bodyBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "scrollBarVisible": "rollOver",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 1,
 "footerBorderSize": 0,
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "title": "Citronella Plant",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "gap": 10,
 "closeButtonPaddingLeft": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#000000",
  "#000000",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "layout": "vertical",
 "veilOpacity": 0.4,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "headerBorderColor": "#000000",
 "closeButtonPaddingTop": 0,
 "bodyBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowColor": "#000000",
 "titleFontColor": "#000000",
 "titleFontSize": "1.29vmin",
 "titlePaddingBottom": 5,
 "shadowBlurRadius": 6,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontWeight": "bold",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundOpacity": 1,
 "bodyPaddingRight": 5,
 "titleTextDecoration": "none",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "titleFontFamily": "Arial",
 "closeButtonBorderRadius": 11,
 "borderSize": 0,
 "bodyPaddingTop": 5,
 "height": 400,
 "bodyPaddingBottom": 5,
 "shadowOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "class": "Window",
 "id": "window_6A5B1240_7EA3_38E3_41A2_C26F4FA38978",
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "footerHeight": 5,
 "bodyBorderColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonBorderColor": "#000000",
 "paddingTop": 0,
 "closeButtonBackgroundColor": [],
 "backgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "data": {
  "name": "Window12967"
 },
 "titlePaddingRight": 5,
 "closeButtonIconWidth": 12,
 "headerBorderSize": 0,
 "headerVerticalAlign": "middle",
 "paddingRight": 0,
 "shadow": true
},
{
 "cursor": "hand",
 "rollOverIconURL": "skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_rollover.png",
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "width": 46,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "borderSize": 0,
 "height": 46,
 "paddingBottom": 0,
 "id": "IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44",
 "verticalAlign": "middle",
 "class": "IconButton",
 "minHeight": 0,
 "pressedIconURL": "skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "push",
 "minWidth": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44.png",
 "paddingRight": 0,
 "data": {
  "name": "Left"
 },
 "shadow": false
},
{
 "id": "panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_camera",
 "initialPosition": {
  "yaw": 169.93,
  "pitch": -8.71,
  "class": "PanoramaCameraPosition"
 },
 "automaticRotationSpeed": 0,
 "initialSequence": "this.sequence_73650E6A_7EA7_08A7_41AC_AC665F0D0E79",
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "audio_5D6B912B_7FA3_38A5_41DA_BF99531BFE14",
 "maximumAngle": 83.24,
 "data": {
  "label": "audio_hero_EnglandPostOffice_DIGIA07_24_345"
 },
 "pitch": -6.08,
 "class": "DirectionalPanoramaAudio",
 "yaw": -32.51,
 "loop": true,
 "audio": {
  "oggUrl": "media/audio_5D6B912B_7FA3_38A5_41DA_BF99531BFE14.ogg",
  "mp3Url": "media/audio_5D6B912B_7FA3_38A5_41DA_BF99531BFE14.mp3",
  "class": "AudioResource"
 },
 "autoplay": true
},
{
 "id": "panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_camera",
 "initialPosition": {
  "yaw": -20.6,
  "pitch": -1.03,
  "class": "PanoramaCameraPosition"
 },
 "automaticRotationSpeed": 0,
 "initialSequence": "this.sequence_75E51447_7EA3_18ED_41C7_6CFBCE6FEFE0",
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "playList_5A35BA2C_7F9F_08A3_41CE_64A8F2CAD9B5",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_camera",
   "player": "this.MapViewerPanoramaPlayer",
   "media": "this.panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290"
  }
 ],
 "class": "PlayList"
},
{
 "id": "popup_6A01F320_7EE1_18A3_41C2_66472B7D114F",
 "popupDistance": 100,
 "rotationX": 0,
 "rotationZ": 0,
 "rotationY": 0,
 "popupMaxWidth": "70%",
 "hfov": 7.96,
 "showEasing": "cubic_in",
 "popupMaxHeight": "70%",
 "hideEasing": "cubic_out",
 "pitch": -1.26,
 "class": "PopupPanoramaOverlay",
 "hideDuration": 500,
 "image": {
  "levels": [
   {
    "width": 1024,
    "height": 512,
    "url": "media/popup_6A01F320_7EE1_18A3_41C2_66472B7D114F_0_1.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "showDuration": 500,
 "yaw": 27.54
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0,
 "width": "30%",
 "borderRadius": 0,
 "contentOpaque": false,
 "horizontalAlign": "right",
 "overflow": "scroll",
 "borderSize": 0,
 "children": [
  "this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4",
  "this.IconButton_128BCB90_1C86_7907_41B3_46B5B135C181",
  "this.IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421"
 ],
 "height": "100%",
 "paddingBottom": 0,
 "id": "Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36",
 "verticalAlign": "middle",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "minHeight": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "top": "0%",
 "gap": 0,
 "propagateClick": false,
 "data": {
  "name": "Right"
 },
 "paddingRight": 10,
 "shadow": false
},
{
 "cursor": "hand",
 "rollOverIconURL": "skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_rollover.png",
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "width": 46,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "borderSize": 0,
 "height": 46,
 "paddingBottom": 0,
 "id": "IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793",
 "verticalAlign": "middle",
 "class": "IconButton",
 "minHeight": 0,
 "pressedIconURL": "skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "push",
 "minWidth": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793.png",
 "paddingRight": 0,
 "data": {
  "name": "Zoom Out"
 },
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "left": "0%",
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 0,
 "width": "30%",
 "borderRadius": 0,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "overflow": "scroll",
 "borderSize": 0,
 "children": [
  "this.IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D",
  "this.IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354"
 ],
 "height": "100%",
 "paddingBottom": 0,
 "id": "Container_1185BA07_1C82_BB09_4190_3425ACEF39CF",
 "verticalAlign": "middle",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "minHeight": 1,
 "paddingLeft": 10,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "top": "0%",
 "gap": 0,
 "propagateClick": false,
 "data": {
  "name": "Left"
 },
 "paddingRight": 0,
 "shadow": false
},
{
 "id": "camera_5A1C8A48_7F9F_08E3_41D5_DB55F3D05CB3",
 "initialPosition": {
  "yaw": -173.07,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticRotationSpeed": 0,
 "initialSequence": "this.sequence_5A1CAA48_7F9F_08E3_41D9_CF6AF64B4E02",
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera"
},
{
 "id": "photo_6A9749A6_7EE1_0BAF_41C5_1CDBB5A6EB65",
 "height": 500,
 "label": "20godrej01",
 "thumbnailUrl": "media/photo_6A9749A6_7EE1_0BAF_41C5_1CDBB5A6EB65_t.jpg",
 "class": "Photo",
 "width": 956,
 "image": {
  "levels": [
   {
    "url": "media/photo_6A9749A6_7EE1_0BAF_41C5_1CDBB5A6EB65.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "duration": 5000
},
{
 "cursor": "hand",
 "rollOverIconURL": "skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_rollover.png",
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "width": 46,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "borderSize": 0,
 "height": 46,
 "paddingBottom": 0,
 "id": "IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354",
 "click": "if(!this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839.get('visible')){ this.setComponentVisibility(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839, true, 0, this.effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7, 'showEffect', false) } else { this.setComponentVisibility(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839, false, 0, this.effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5, 'hideEffect', false) }",
 "verticalAlign": "middle",
 "class": "IconButton",
 "minHeight": 0,
 "pressedIconURL": "skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "toggle",
 "minWidth": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354.png",
 "paddingRight": 0,
 "data": {
  "name": "Thumblist"
 },
 "shadow": false
},
{
 "id": "effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5",
 "class": "FadeOutEffect",
 "easing": "linear",
 "duration": 200
},
{
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6",
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_rotation",
 "buttonMoveDown": "this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF",
 "buttonMoveUp": "this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64",
 "buttonMoveLeft": "this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44",
 "class": "PanoramaPlayer",
 "buttonMoveRight": "this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396",
 "buttonZoomIn": "this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A",
 "buttonZoomOut": "this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793",
 "viewerArea": "this.MainViewer",
 "gyroscopeEnabled": true
},
{
 "headerBackgroundOpacity": 1,
 "titleFontStyle": "normal",
 "scrollBarWidth": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarColor": "#000000",
 "closeButtonBackgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconHeight": 12,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "headerPaddingBottom": 10,
 "scrollBarOpacity": 0.5,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "modal": true,
 "borderRadius": 5,
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "overflow": "scroll",
 "titlePaddingTop": 5,
 "children": [
  "this.htmlText_6D6C256F_7EA0_F8BD_41C2_DB0DC1D524AD",
  "this.image_uid5A395A2A_7F9F_08A7_41DB_149F0396C0F9_1"
 ],
 "backgroundColor": [],
 "paddingBottom": 0,
 "bodyBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "scrollBarVisible": "rollOver",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "title": "Silver vine",
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "gap": 10,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "layout": "vertical",
 "veilOpacity": 0.4,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "headerBorderColor": "#000000",
 "bodyBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowColor": "#000000",
 "titleFontColor": "#000000",
 "titleFontSize": "1.29vw",
 "titlePaddingBottom": 5,
 "shadowBlurRadius": 6,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontWeight": "bold",
 "backgroundOpacity": 1,
 "width": 400,
 "bodyPaddingRight": 5,
 "titleTextDecoration": "none",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "titleFontFamily": "Arial",
 "closeButtonBorderRadius": 11,
 "borderSize": 0,
 "bodyPaddingTop": 5,
 "height": 400,
 "bodyPaddingBottom": 5,
 "shadowOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "class": "Window",
 "id": "window_6D6E756F_7EA0_F8BD_41DD_AA084D7E7F1C",
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "footerHeight": 5,
 "bodyBorderColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingTop": 0,
 "closeButtonBackgroundColor": [],
 "backgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "data": {
  "name": "Window11774"
 },
 "titlePaddingRight": 5,
 "closeButtonIconWidth": 12,
 "headerBorderSize": 0,
 "headerVerticalAlign": "middle",
 "paddingRight": 0,
 "shadow": true
},
{
 "cursor": "hand",
 "rollOverIconURL": "skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_rollover.png",
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "width": 46,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "borderSize": 0,
 "height": 46,
 "paddingBottom": 0,
 "id": "IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D",
 "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, -1)",
 "verticalAlign": "middle",
 "class": "IconButton",
 "minHeight": 0,
 "pressedIconURL": "skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "push",
 "minWidth": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D.png",
 "paddingRight": 0,
 "data": {
  "name": "Previous"
 },
 "shadow": false
},
{
 "id": "album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E_1",
 "height": 300,
 "label": "Indian-Ring-Necked-Parakeet-300x300",
 "thumbnailUrl": "media/album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E_1_t.jpg",
 "class": "Photo",
 "width": 300,
 "image": {
  "levels": [
   {
    "url": "media/album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E_1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "duration": 5000
},
{
 "id": "Menu_5A31CA2F_7F9F_08BD_41CF_E32AA2FB0F6B",
 "children": [
  {
   "label": "Pantry",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "Terrace",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  }
 ],
 "fontFamily": "Arial",
 "rollOverBackgroundColor": "#000000",
 "label": "Media",
 "opacity": 0.4,
 "class": "Menu",
 "fontColor": "#FFFFFF",
 "selectedBackgroundColor": "#202020",
 "rollOverOpacity": 0.8,
 "selectedFontColor": "#FFFFFF",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "id": "MapViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6",
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_rotation",
 "buttonMoveDown": "this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF",
 "buttonMoveUp": "this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64",
 "buttonMoveLeft": "this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44",
 "class": "PanoramaPlayer",
 "buttonMoveRight": "this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396",
 "buttonZoomIn": "this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A",
 "buttonZoomOut": "this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793",
 "viewerArea": "this.MapViewer",
 "gyroscopeEnabled": true
},
{
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadow": true,
 "paddingRight": 0,
 "left": "0%",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "vrPointerColor": "#FFFFFF",
 "borderRadius": 0,
 "toolTipFontSize": "1.11vmin",
 "vrPointerSelectionColor": "#FF6600",
 "progressBarOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingBottom": 0,
 "progressBorderSize": 0,
 "toolTipPaddingLeft": 6,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "vrPointerSelectionTime": 2000,
 "toolTipPaddingRight": 6,
 "progressBorderRadius": 0,
 "firstTransitionDuration": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "displayTooltipInTouchScreens": true,
 "paddingLeft": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "top": "0%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBottom": 2,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "toolTipDisplayTime": 600,
 "progressHeight": 10,
 "playbackBarBottom": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadHeight": 15,
 "toolTipShadowSpread": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadWidth": 6,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "width": "40%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderColor": "#000000",
 "toolTipBorderRadius": 3,
 "playbackBarRight": 0,
 "playbackBarBorderSize": 0,
 "height": "30%",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "id": "MapViewer",
 "minHeight": 1,
 "toolTipTextShadowOpacity": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadOpacity": 1,
 "toolTipBorderSize": 1,
 "paddingTop": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressRight": 0,
 "minWidth": 1,
 "toolTipShadowBlurRadius": 3,
 "propagateClick": false,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressOpacity": 1,
 "toolTipOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipPaddingBottom": 4,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "data": {
  "name": "MapViewer"
 },
 "shadow": false
},
{
 "id": "audio_5DBF0C02_7F61_0867_41D1_2F7F3721094D",
 "maximumAngle": 164.66,
 "data": {
  "label": "ftus_industrial_construction_distant_digger_exhaust_bangs_occ_vehicle_pass_night_insects_crickets_vietnam_002_582"
 },
 "pitch": 2.58,
 "class": "DirectionalPanoramaAudio",
 "yaw": -172.56,
 "loop": true,
 "audio": {
  "oggUrl": "media/audio_5DBF0C02_7F61_0867_41D1_2F7F3721094D.ogg",
  "mp3Url": "media/audio_5DBF0C02_7F61_0867_41D1_2F7F3721094D.mp3",
  "class": "AudioResource"
 },
 "autoplay": true
},
{
 "toolTipPaddingTop": 4,
 "playbackBarHeadShadow": true,
 "paddingRight": 0,
 "left": "0%",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "vrPointerColor": "#FFFFFF",
 "borderRadius": 0,
 "toolTipFontSize": "1.11vmin",
 "vrPointerSelectionColor": "#FF6600",
 "progressBarOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingBottom": 0,
 "progressBorderSize": 0,
 "toolTipPaddingLeft": 6,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "vrPointerSelectionTime": 2000,
 "toolTipPaddingRight": 6,
 "progressBorderRadius": 0,
 "firstTransitionDuration": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "displayTooltipInTouchScreens": true,
 "paddingLeft": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "top": "0%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBottom": 2,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "toolTipDisplayTime": 600,
 "progressHeight": 10,
 "playbackBarBottom": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadHeight": 15,
 "toolTipShadowSpread": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadWidth": 6,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "width": "40%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderColor": "#000000",
 "toolTipBorderRadius": 3,
 "playbackBarRight": 0,
 "playbackBarBorderSize": 0,
 "height": "30%",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "id": "MapViewer_mobile",
 "minHeight": 1,
 "toolTipTextShadowOpacity": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadOpacity": 1,
 "toolTipBorderSize": 1,
 "paddingTop": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressRight": 0,
 "minWidth": 1,
 "toolTipShadowBlurRadius": 3,
 "propagateClick": false,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressOpacity": 1,
 "toolTipOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipPaddingBottom": 4,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "data": {
  "name": "MapViewer"
 },
 "shadow": false
},
{
 "id": "album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E_0",
 "height": 600,
 "label": "69e2e9cd082c665dd0dff0fd98f79503",
 "thumbnailUrl": "media/album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E_0_t.jpg",
 "class": "Photo",
 "width": 600,
 "image": {
  "levels": [
   {
    "url": "media/album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "duration": 5000
},
{
 "id": "panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918",
 "label": "Terrace",
 "partial": false,
 "audios": [
  "this.audio_5DBF0C02_7F61_0867_41D1_2F7F3721094D"
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "back": {
    "levels": [
     {
      "width": 2560,
      "height": 2560,
      "rowCount": 5,
      "colCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1536,
      "height": 1536,
      "rowCount": 3,
      "colCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "colCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2560,
      "height": 2560,
      "rowCount": 5,
      "colCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1536,
      "height": 1536,
      "rowCount": 3,
      "colCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "colCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2560,
      "height": 2560,
      "rowCount": 5,
      "colCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1536,
      "height": 1536,
      "rowCount": 3,
      "colCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "colCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_t.jpg",
   "bottom": {
    "levels": [
     {
      "width": 2560,
      "height": 2560,
      "rowCount": 5,
      "colCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1536,
      "height": 1536,
      "rowCount": 3,
      "colCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "colCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "width": 2560,
      "height": 2560,
      "rowCount": 5,
      "colCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1536,
      "height": 1536,
      "rowCount": 3,
      "colCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "colCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2560,
      "height": 2560,
      "rowCount": 5,
      "colCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1536,
      "height": 1536,
      "rowCount": 3,
      "colCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "colCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_t.jpg",
 "data": {
  "subtitle": "Terrace"
 },
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 6.93,
   "distance": 1,
   "backwardYaw": 124.41,
   "panorama": "this.panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290"
  }
 ],
 "cardboardMenu": "this.Menu_5A31CA2F_7F9F_08BD_41CF_E32AA2FB0F6B",
 "overlays": [
  "this.overlay_6A07BFBF_7EA1_079D_41D6_7322F7D833DE",
  "this.overlay_6DCD9E56_7EA3_08EF_41BA_3A18EF4CFC75",
  "this.overlay_6A598E0F_7EA1_087C_41D2_EA832C8F581E",
  "this.overlay_6AF4FA9E_7EA1_099F_41C9_24DC5C61CE33",
  "this.overlay_6ACEFE64_7E9F_08A3_41CE_5269455321BE",
  "this.overlay_6AA9B2D0_7EE7_39E3_41B8_B61FB35D3D80",
  "this.popup_6A01F320_7EE1_18A3_41C2_66472B7D114F"
 ],
 "mapLocations": [
  {
   "x": 1533.31,
   "angle": -183.57,
   "y": 357.34,
   "map": "this.map_5B1858FD_7FA1_099D_41D6_13AE45C8A27B",
   "class": "PanoramaMapLocation"
  }
 ]
},
{
 "id": "album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E",
 "playList": "this.album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E_AlbumPlayList",
 "label": "Photo Album 69e2e9cd082c665dd0dff0fd98f79503",
 "thumbnailUrl": "media/album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E_t.png",
 "class": "PhotoAlbum"
},
{
 "id": "photo_5C336F6C_7EE1_08A3_41DF_892AB7064046",
 "height": 1000,
 "label": "citronella",
 "thumbnailUrl": "media/photo_5C336F6C_7EE1_08A3_41DF_892AB7064046_t.jpg",
 "class": "Photo",
 "width": 1000,
 "image": {
  "levels": [
   {
    "url": "media/photo_5C336F6C_7EE1_08A3_41DF_892AB7064046.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "duration": 5000
},
{
 "cursor": "hand",
 "rollOverIconURL": "skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_rollover.png",
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "width": 46,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "borderSize": 0,
 "height": 46,
 "paddingBottom": 0,
 "id": "IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF",
 "verticalAlign": "middle",
 "class": "IconButton",
 "minHeight": 0,
 "pressedIconURL": "skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "push",
 "minWidth": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF.png",
 "paddingRight": 0,
 "data": {
  "name": "Down"
 },
 "shadow": false
},
{
 "id": "mainPlayList",
 "items": [
  "this.PanoramaPlayListItem_5A34FA2D_7F9F_08BD_41D5_9D6BE23237B3",
  "this.PanoramaPlayListItem_5A33BA2D_7F9F_08BD_41CE_0185498E67D1"
 ],
 "class": "PlayList"
},
{
 "id": "playList_5A380A2B_7F9F_08A5_41CB_D9890C6A1C17",
 "items": [
  "this.albumitem_5A388A2B_7F9F_08A5_41D9_3424A94131A8"
 ],
 "change": "this.showComponentsWhileMouseOver(this.container_5A38AA2B_7F9F_08A5_41C9_065613135F6D, [this.htmltext_5A368A2C_7F9F_08A3_41CD_885A4FFB1C80,this.component_5A350A2C_7F9F_08A3_41CC_7EA5670E4B17,this.component_5A351A2C_7F9F_08A3_41D5_1A75DD330FB8], 2000)",
 "class": "PlayList"
},
{
 "id": "effect_0A30489F_1C86_6738_41A8_2722230A2E2F",
 "class": "FadeOutEffect",
 "easing": "linear",
 "duration": 100
},
{
 "headerBackgroundOpacity": 1,
 "titleFontStyle": "normal",
 "scrollBarWidth": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarColor": "#000000",
 "closeButtonBackgroundColorRatios": [],
 "closeButtonIconLineWidth": 2,
 "closeButtonIconHeight": 12,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "headerPaddingBottom": 10,
 "scrollBarOpacity": 0.5,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "modal": true,
 "borderRadius": 5,
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "overflow": "scroll",
 "titlePaddingTop": 5,
 "children": [
  "this.htmlText_6D1D5507_7EA0_F86D_41C3_E2C664331E08",
  "this.image_uid5A3B1A28_7F9F_08A3_41D5_DFD4F69AC951_1"
 ],
 "backgroundColor": [],
 "paddingBottom": 0,
 "bodyBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "scrollBarVisible": "rollOver",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "title": "Godrej Industries",
 "closeButtonIconColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "gap": 10,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColorRatios": [],
 "layout": "vertical",
 "veilOpacity": 0.4,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingLeft": 5,
 "headerBorderColor": "#000000",
 "bodyBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowColor": "#000000",
 "titleFontColor": "#000000",
 "titleFontSize": "1.29vmin",
 "titlePaddingBottom": 5,
 "shadowBlurRadius": 6,
 "headerBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "width": 400,
 "bodyPaddingRight": 5,
 "titleTextDecoration": "none",
 "contentOpaque": false,
 "headerPaddingRight": 10,
 "titleFontFamily": "Arial",
 "closeButtonBorderRadius": 11,
 "borderSize": 0,
 "bodyPaddingTop": 5,
 "height": 500,
 "bodyPaddingBottom": 5,
 "shadowOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "class": "Window",
 "id": "window_6D1F9507_7EA0_F86D_41C2_60F0E9E8B308",
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "footerHeight": 5,
 "bodyBorderColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingTop": 0,
 "closeButtonBackgroundColor": [],
 "backgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "minWidth": 20,
 "bodyBackgroundColorDirection": "vertical",
 "veilColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "data": {
  "name": "Window9474"
 },
 "titlePaddingRight": 5,
 "closeButtonIconWidth": 12,
 "headerBorderSize": 0,
 "headerVerticalAlign": "middle",
 "paddingRight": 0,
 "shadow": true
},
{
 "cursor": "hand",
 "rollOverIconURL": "skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_rollover.png",
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "width": 46,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "borderSize": 0,
 "height": 46,
 "paddingBottom": 0,
 "id": "IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A",
 "verticalAlign": "middle",
 "class": "IconButton",
 "minHeight": 0,
 "pressedIconURL": "skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_pressed.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "push",
 "minWidth": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A.png",
 "paddingRight": 0,
 "data": {
  "name": "Zoom In"
 },
 "shadow": false
},
{
 "id": "panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290",
 "label": "Pantry",
 "partial": false,
 "audios": [
  "this.audio_5D6B912B_7FA3_38A5_41DA_BF99531BFE14"
 ],
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "hfov": 360,
 "frames": [
  {
   "back": {
    "levels": [
     {
      "width": 2560,
      "height": 2560,
      "rowCount": 5,
      "colCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1536,
      "height": 1536,
      "rowCount": 3,
      "colCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "colCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "width": 2560,
      "height": 2560,
      "rowCount": 5,
      "colCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1536,
      "height": 1536,
      "rowCount": 3,
      "colCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "colCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "width": 2560,
      "height": 2560,
      "rowCount": 5,
      "colCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1536,
      "height": 1536,
      "rowCount": 3,
      "colCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "colCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "width": 2560,
      "height": 2560,
      "rowCount": 5,
      "colCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1536,
      "height": 1536,
      "rowCount": 3,
      "colCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "colCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_t.jpg",
   "left": {
    "levels": [
     {
      "width": 2560,
      "height": 2560,
      "rowCount": 5,
      "colCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1536,
      "height": 1536,
      "rowCount": 3,
      "colCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "colCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "width": 2560,
      "height": 2560,
      "rowCount": 5,
      "colCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1536,
      "height": 1536,
      "rowCount": 3,
      "colCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "colCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     },
     {
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_t.jpg",
 "data": {
  "subtitle": "IDC Pantry"
 },
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 124.41,
   "distance": 1,
   "backwardYaw": 6.93,
   "panorama": "this.panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918"
  }
 ],
 "cardboardMenu": "this.Menu_5A31CA2F_7F9F_08BD_41CF_E32AA2FB0F6B",
 "overlays": [
  "this.overlay_6DA5F9DE_7EA1_0B9F_41D6_14537C59C6EF"
 ],
 "mapLocations": [
  {
   "x": 1235.05,
   "angle": -97.27,
   "y": 908.72,
   "map": "this.map_5B1858FD_7FA1_099D_41D6_13AE45C8A27B",
   "class": "PanoramaMapLocation"
  }
 ]
},
{
 "left": 0,
 "right": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingBottom": 0,
 "id": "veilPopupPanorama",
 "class": "UIComponent",
 "minHeight": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "bottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "paddingRight": 0,
 "data": {
  "name": "UIComponent36541"
 },
 "shadow": false
},
{
 "left": 0,
 "right": 0,
 "scaleMode": "custom",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "paddingBottom": 0,
 "id": "zoomImagePopupPanorama",
 "class": "ZoomImage",
 "minHeight": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "bottom": 0,
 "backgroundColorRatios": [],
 "top": 0,
 "paddingRight": 0,
 "data": {
  "name": "ZoomImage36542"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "fontFamily": "Arial",
 "fontSize": "1.29vmin",
 "iconColor": "#000000",
 "fontStyle": "normal",
 "right": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "shadowBlurRadius": 6,
 "borderColor": "#000000",
 "iconLineWidth": 5,
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "iconBeforeLabel": true,
 "horizontalAlign": "center",
 "rollOverIconColor": "#666666",
 "paddingBottom": 5,
 "id": "closeButtonPopupPanorama",
 "label": "",
 "shadowSpread": 1,
 "verticalAlign": "middle",
 "iconWidth": 20,
 "class": "CloseButton",
 "minHeight": 0,
 "pressedIconColor": "#888888",
 "visible": false,
 "paddingLeft": 5,
 "paddingTop": 5,
 "mode": "push",
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "propagateClick": false,
 "data": {
  "name": "CloseButton36543"
 },
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "top": 10,
 "paddingRight": 5,
 "fontWeight": "normal",
 "iconHeight": 20,
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "height": "31%",
 "paddingBottom": 10,
 "id": "htmlText_6B9BDAC0_7E9F_09E3_41D5_F22FB183A407",
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "minHeight": 0,
 "paddingLeft": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Green is a dominant color in many parrot species around the world, including those frequently kept as pets. ... Some green parrots have additional bright colors mixed into their plumage while others have more subtle markings. These birds are intelligent and full of personality, and they require a committed caregiver.</SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "minWidth": 0,
 "propagateClick": false,
 "data": {
  "name": "HTMLText14273"
 },
 "paddingRight": 10,
 "shadow": false
},
{
 "height": "68%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "borderRadius": 0,
 "contentOpaque": false,
 "backgroundColor": [],
 "borderSize": 0,
 "children": [
  "this.viewer_uid5A384A2B_7F9F_08A5_41C3_247C856500C7",
  {
   "scrollBarWidth": 7,
   "left": 0,
   "layout": "vertical",
   "scrollBarColor": "#FFFFFF",
   "right": 0,
   "scrollBarOpacity": 0.5,
   "backgroundOpacity": 0.3,
   "borderRadius": 0,
   "contentOpaque": true,
   "backgroundColor": [],
   "borderSize": 0,
   "children": [
    "this.htmltext_5A368A2C_7F9F_08A3_41CD_885A4FFB1C80"
   ],
   "horizontalAlign": "left",
   "overflow": "scroll",
   "paddingBottom": 0,
   "verticalAlign": "bottom",
   "scrollBarVisible": "rollOver",
   "class": "Container",
   "minHeight": 20,
   "height": "30%",
   "paddingLeft": 0,
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "scrollBarMargin": 2,
   "minWidth": 20,
   "gap": 10,
   "propagateClick": false,
   "bottom": 0,
   "backgroundColorRatios": [],
   "shadow": false,
   "paddingRight": 0,
   "data": {
    "name": "Container36537"
   }
  },
  "this.component_5A350A2C_7F9F_08A3_41CC_7EA5670E4B17",
  "this.component_5A351A2C_7F9F_08A3_41D5_1A75DD330FB8"
 ],
 "horizontalAlign": "left",
 "overflow": "scroll",
 "paddingBottom": 0,
 "id": "container_5A38AA2B_7F9F_08A5_41C9_065613135F6D",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "minHeight": 20,
 "paddingLeft": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "gap": 10,
 "propagateClick": false,
 "data": {
  "name": "Container36536"
 },
 "backgroundColorRatios": [],
 "shadow": false,
 "paddingRight": 0
},
{
 "id": "overlay_5C5392E6_7FA1_39AF_41C4_E1BF00C8B2A4",
 "image": {
  "width": 680,
  "height": 511.82,
  "y": 101.43,
  "x": 1193.31,
  "image": {
   "levels": [
    {
     "width": 682,
     "height": 513,
     "url": "media/map_5B1858FD_7FA1_099D_41D6_13AE45C8A27B_HS_0.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "map": {
  "width": 680,
  "height": 511.82,
  "offsetX": 0,
  "x": 1193.31,
  "image": {
   "levels": [
    {
     "width": 200,
     "height": 150,
     "url": "media/map_5B1858FD_7FA1_099D_41D6_13AE45C8A27B_HS_0_map.gif",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "y": 101.43,
  "class": "HotspotMapOverlayMap"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay"
},
{
 "id": "overlay_592155CE_7FAF_3BFF_41A8_CF58AA760950",
 "image": {
  "width": 1272.73,
  "height": 576.36,
  "y": 620.54,
  "x": 598.69,
  "image": {
   "levels": [
    {
     "width": 1274,
     "height": 578,
     "url": "media/map_5B1858FD_7FA1_099D_41D6_13AE45C8A27B_HS_1.png",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "map": {
  "width": 1272.73,
  "height": 576.36,
  "offsetX": 0,
  "x": 598.69,
  "image": {
   "levels": [
    {
     "width": 200,
     "height": 90,
     "url": "media/map_5B1858FD_7FA1_099D_41D6_13AE45C8A27B_HS_1_map.gif",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "y": 620.54,
  "class": "HotspotMapOverlayMap"
 },
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.MapViewer.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_5A35BA2C_7F9F_08A3_41CE_64A8F2CAD9B5.set('selectedIndex', -1); }, this); this.playList_5A35BA2C_7F9F_08A3_41CE_64A8F2CAD9B5.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay"
},
{
 "id": "sequence_5A24AA3E_7F9F_089F_41C9_E2162574F889",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "scrollBarWidth": 10,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "height": "43%",
 "paddingBottom": 10,
 "id": "htmlText_6A5D0240_7EA3_38E3_41DC_7C1320D710FE",
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "minHeight": 0,
 "paddingLeft": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Pelargonium 'citrosum' is marketed as \"mosquito plant\" or \"citrosa geranium\" in stores in the United States and Canada, even though research from the University of Guelph indicates the plant is ineffective against Aedes aegypti mosquitos.[3] \"Not only was the plant ineffective at protecting humans against Aedes mosquito bites, the mosquitoes were seen landing and resting on the citrosa plant on a regular basis.\"[1]</SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "minWidth": 0,
 "propagateClick": false,
 "data": {
  "name": "HTMLText12968"
 },
 "paddingRight": 10,
 "shadow": false
},
{
 "scaleMode": "fit_inside",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "horizontalAlign": "center",
 "borderSize": 0,
 "height": "56%",
 "paddingBottom": 0,
 "id": "image_uid5A398A2A_7F9F_08A7_419E_3B433B0806E5_1",
 "verticalAlign": "middle",
 "url": "media/photo_5C336F6C_7EE1_08A3_41DF_892AB7064046.jpg",
 "class": "Image",
 "minHeight": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 0,
 "propagateClick": false,
 "data": {
  "name": "Image36534"
 },
 "paddingRight": 0,
 "shadow": false
},
{
 "id": "sequence_73650E6A_7EA7_08A7_41AC_AC665F0D0E79",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_75E51447_7EA3_18ED_41C7_6CFBCE6FEFE0",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "sequence_5A1CAA48_7F9F_08E3_41D9_CF6AF64B4E02",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "scrollBarWidth": 10,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "height": "47%",
 "paddingBottom": 10,
 "id": "htmlText_6D6C256F_7EA0_F8BD_41C2_DB0DC1D524AD",
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "minHeight": 0,
 "paddingLeft": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"> An evergreen vine growing to 20 m (66 ft) tall, with stems up to 4 cm (2 in) in diameter, climbing by means of aerial roots which adhere to surfaces. The leaves are alternate, heart-shaped, entire on juvenile plants, but irregularly pinnatifid on mature plants, up to 100 cm (39 in) long and 45 cm (18 in) broad; juvenile leaves are much smaller, typically under 20 cm (8 in) long.</SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "minWidth": 0,
 "propagateClick": false,
 "data": {
  "name": "HTMLText11775"
 },
 "paddingRight": 10,
 "shadow": false
},
{
 "scaleMode": "fit_inside",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "horizontalAlign": "center",
 "borderSize": 0,
 "height": "52%",
 "paddingBottom": 0,
 "id": "image_uid5A395A2A_7F9F_08A7_41DB_149F0396C0F9_1",
 "verticalAlign": "middle",
 "url": "media/photo_5CE74899_7EE1_0865_41CB_E8AB0850485C.jpg",
 "class": "Image",
 "minHeight": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 0,
 "propagateClick": false,
 "data": {
  "name": "Image36533"
 },
 "paddingRight": 0,
 "shadow": false
},
{
 "id": "overlay_6A07BFBF_7EA1_079D_41D6_7322F7D833DE",
 "maps": [
  {
   "hfov": 6.82,
   "image": {
    "levels": [
     {
      "width": 19,
      "height": 16,
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 6.93,
   "pitch": -7.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290, this.camera_5A249A3E_7F9F_089F_41C3_39B21A310B83); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "pitch": -7.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 6.93,
   "hfov": 6.82,
   "distance": 100,
   "image": "this.AnimatedImageResource_5FFEA99E_7EE1_0B9F_41D3_105D8D38F786"
  }
 ],
 "data": {
  "label": "Arrow 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false
},
{
 "id": "overlay_6DCD9E56_7EA3_08EF_41BA_3A18EF4CFC75",
 "maps": [
  {
   "hfov": 5.93,
   "image": {
    "levels": [
     {
      "width": 16,
      "height": 17,
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 133.14,
   "pitch": 29.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_6D1F9507_7EA0_F86D_41C2_60F0E9E8B308, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "hfov": 5.93,
   "distance": 50,
   "pitch": 29.85,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "width": 151,
      "height": 162,
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_1_HS_2_0.png",
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 133.14
  }
 ],
 "data": {
  "label": "Godrej Industries"
 },
 "useHandCursor": true,
 "rollOverDisplay": false
},
{
 "id": "overlay_6A598E0F_7EA1_087C_41D2_EA832C8F581E",
 "maps": [
  {
   "hfov": 3.08,
   "image": {
    "levels": [
     {
      "width": 16,
      "height": 17,
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 78.7,
   "pitch": -11.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_6D6E756F_7EA0_F8BD_41DD_AA084D7E7F1C, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "hfov": 3.08,
   "distance": 50,
   "pitch": -11.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "width": 69,
      "height": 75,
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0_HS_3_0.png",
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 78.7
  }
 ],
 "data": {
  "label": "Plant 1"
 },
 "useHandCursor": true,
 "rollOverDisplay": false
},
{
 "id": "overlay_6AF4FA9E_7EA1_099F_41C9_24DC5C61CE33",
 "maps": [
  {
   "hfov": 2.87,
   "image": {
    "levels": [
     {
      "width": 16,
      "height": 17,
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 67.69,
   "pitch": -10.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_6A5B1240_7EA3_38E3_41A2_C26F4FA38978, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "hfov": 2.87,
   "distance": 50,
   "pitch": -10.52,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "width": 64,
      "height": 68,
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0_HS_4_0.png",
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 67.69
  }
 ],
 "data": {
  "label": "Plant 2"
 },
 "useHandCursor": true,
 "rollOverDisplay": false
},
{
 "id": "overlay_6ACEFE64_7E9F_08A3_41CE_5269455321BE",
 "maps": [
  {
   "hfov": 3.51,
   "image": {
    "levels": [
     {
      "width": 21,
      "height": 16,
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 35.04,
   "pitch": 23.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_6B9D1AC0_7E9F_09E3_41A4_FEB98D562129, null, false); this.playList_5A380A2B_7F9F_08A5_41CB_D9890C6A1C17.set('selectedIndex', 0); ; this.playGlobalAudio(this.audio_6B268B0C_7EE1_0863_41DA_9C9B92EDF860)",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "hfov": 3.51,
   "distance": 50,
   "pitch": 23.65,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "width": 85,
      "height": 63,
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_0_HS_5_0.png",
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 35.04
  }
 ],
 "data": {
  "label": "Bird"
 },
 "useHandCursor": true,
 "rollOverDisplay": false
},
{
 "id": "overlay_6AA9B2D0_7EE7_39E3_41B8_B61FB35D3D80",
 "maps": [
  {
   "hfov": 7.96,
   "image": {
    "levels": [
     {
      "width": 16,
      "height": 16,
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 27.54,
   "pitch": -1.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_6A01F320_7EE1_18A3_41C2_66472B7D114F, {'borderSize':0,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingLeft':5,'rollOverIconHeight':20,'paddingTop':5,'pressedIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderSize':0,'borderColor':'#000000','backgroundColorDirection':'vertical','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedBackgroundOpacity':0.3,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'paddingRight':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','pressedIconWidth':20}, this.ImageResource_6984E788_7EE3_3863_41C6_CBF3DA137D5A, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "hfov": 7.96,
   "distance": 50,
   "pitch": -1.26,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "width": 176,
      "height": 170,
      "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_1_HS_6_0.png",
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 27.54
  }
 ],
 "data": {
  "label": "Plant Group"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false
},
{
 "id": "album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E_AlbumPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_outside",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "duration": 5000,
    "targetPosition": {
     "x": "0.57",
     "zoomFactor": 1.1,
     "y": "0.49",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera"
   },
   "media": "this.album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E_0"
  },
  {
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_outside",
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50",
     "class": "PhotoCameraPosition"
    },
    "duration": 5000,
    "targetPosition": {
     "x": "0.55",
     "zoomFactor": 1.1,
     "y": "0.75",
     "class": "PhotoCameraPosition"
    },
    "class": "MovementPhotoCamera"
   },
   "media": "this.album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E_1"
  }
 ],
 "class": "PhotoPlayList"
},
{
 "id": "PanoramaPlayListItem_5A34FA2D_7F9F_08BD_41D5_9D6BE23237B3",
 "camera": "this.panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_camera",
 "player": "this.MainViewerPanoramaPlayer",
 "media": "this.panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5A34FA2D_7F9F_08BD_41D5_9D6BE23237B3, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "class": "PanoramaPlayListItem"
},
{
 "id": "PanoramaPlayListItem_5A33BA2D_7F9F_08BD_41CE_0185498E67D1",
 "camera": "this.panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_camera",
 "end": "this.trigger('tourEnded')",
 "player": "this.MainViewerPanoramaPlayer",
 "media": "this.panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5A33BA2D_7F9F_08BD_41CE_0185498E67D1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 0)",
 "class": "PanoramaPlayListItem"
},
{
 "id": "albumitem_5A388A2B_7F9F_08A5_41D9_3424A94131A8",
 "player": "this.viewer_uid5A384A2B_7F9F_08A5_41C3_247C856500C7PhotoAlbumPlayer",
 "media": "this.album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E",
 "begin": "this.updateMediaLabelFromPlayList(this.album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E_AlbumPlayList, this.htmltext_5A368A2C_7F9F_08A3_41CD_885A4FFB1C80, this.albumitem_5A388A2B_7F9F_08A5_41D9_3424A94131A8); this.loopAlbum(this.playList_5A380A2B_7F9F_08A5_41CB_D9890C6A1C17, 0)",
 "class": "PhotoAlbumPlayListItem"
},
{
 "scrollBarWidth": 10,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "height": "40%",
 "paddingBottom": 10,
 "id": "htmlText_6D1D5507_7EA0_F86D_41C3_E2C664331E08",
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "minHeight": 0,
 "paddingLeft": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Godrej Industries is an Indian manufacturer of oleochemicals for use in over various industries. It also manufactures edible oils, vanaspati and bakery fats. In addition, it operates real estate. Godrej Industries (Chemicals Division) has its headquarters in Mumbai, India, and bases in 40 countries; it exports to more than 60 countries.</SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "minWidth": 0,
 "propagateClick": false,
 "data": {
  "name": "HTMLText9475"
 },
 "paddingRight": 10,
 "shadow": false
},
{
 "scaleMode": "fit_inside",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "horizontalAlign": "center",
 "borderSize": 0,
 "height": "59%",
 "paddingBottom": 0,
 "id": "image_uid5A3B1A28_7F9F_08A3_41D5_DFD4F69AC951_1",
 "verticalAlign": "middle",
 "url": "media/photo_6A9749A6_7EE1_0BAF_41C5_1CDBB5A6EB65.jpg",
 "class": "Image",
 "minHeight": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 0,
 "propagateClick": false,
 "data": {
  "name": "Image36532"
 },
 "paddingRight": 0,
 "shadow": false
},
{
 "id": "overlay_6DA5F9DE_7EA1_0B9F_41D6_14537C59C6EF",
 "maps": [
  {
   "hfov": 5.75,
   "image": {
    "levels": [
     {
      "width": 16,
      "height": 16,
      "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 124.41,
   "pitch": -5.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918, this.camera_5A1C8A48_7F9F_08E3_41D5_DB55F3D05CB3); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "items": [
  {
   "pitch": -5.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 124.41,
   "hfov": 5.75,
   "distance": 50,
   "image": "this.AnimatedImageResource_5FFE999E_7EE1_0B9F_41CB_26DBE4C56951"
  }
 ],
 "data": {
  "label": "Arrow 02 Left-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false
},
{
 "toolTipShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "vrPointerColor": "#FFFFFF",
 "borderRadius": 0,
 "toolTipFontSize": "1.11vmin",
 "vrPointerSelectionColor": "#FF6600",
 "progressBarOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingBottom": 0,
 "progressBorderSize": 0,
 "toolTipPaddingLeft": 6,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "vrPointerSelectionTime": 2000,
 "toolTipPaddingRight": 6,
 "progressBorderRadius": 0,
 "firstTransitionDuration": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "displayTooltipInTouchScreens": true,
 "paddingLeft": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBottom": 2,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "toolTipDisplayTime": 600,
 "progressHeight": 10,
 "playbackBarBottom": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadHeight": 15,
 "toolTipShadowSpread": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadWidth": 6,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "width": "100%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderColor": "#000000",
 "toolTipBorderRadius": 3,
 "playbackBarRight": 0,
 "playbackBarBorderSize": 0,
 "height": "100%",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowVerticalLength": 0,
 "id": "viewer_uid5A384A2B_7F9F_08A5_41C3_247C856500C7",
 "minHeight": 50,
 "toolTipTextShadowOpacity": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadOpacity": 1,
 "toolTipBorderSize": 1,
 "paddingTop": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressRight": 0,
 "minWidth": 100,
 "propagateClick": false,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressOpacity": 1,
 "shadow": false,
 "toolTipPaddingTop": 4,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "data": {
  "name": "ViewerArea36535"
 },
 "toolTipOpacity": 1
},
{
 "scrollBarWidth": 10,
 "scrollBarColor": "#000000",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0.7,
 "width": "100%",
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingBottom": 5,
 "id": "htmltext_5A368A2C_7F9F_08A3_41CD_885A4FFB1C80",
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "class": "HTMLText",
 "minHeight": 0,
 "visible": false,
 "paddingLeft": 10,
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "html": "",
 "scrollBarMargin": 2,
 "minWidth": 0,
 "propagateClick": false,
 "data": {
  "name": "HTMLText36538"
 },
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 10,
 "shadow": false
},
{
 "cursor": "hand",
 "left": 10,
 "iconURL": "skin/album_left.png",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "transparencyActive": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "borderSize": 0,
 "paddingBottom": 0,
 "id": "component_5A350A2C_7F9F_08A3_41CC_7EA5670E4B17",
 "click": "this.loadFromCurrentMediaPlayList(this.album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E_AlbumPlayList, -1)",
 "verticalAlign": "middle",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "class": "IconButton",
 "minHeight": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "push",
 "minWidth": 0,
 "top": "45%",
 "propagateClick": false,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "IconButton36539"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "iconURL": "skin/album_right.png",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "right": 10,
 "transparencyActive": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "borderSize": 0,
 "paddingBottom": 0,
 "id": "component_5A351A2C_7F9F_08A3_41D5_1A75DD330FB8",
 "click": "this.loadFromCurrentMediaPlayList(this.album_5CDA057E_7EEF_189F_41C8_D6324C4C3B4E_AlbumPlayList, 1)",
 "verticalAlign": "middle",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "class": "IconButton",
 "minHeight": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "mode": "push",
 "minWidth": 0,
 "top": "45%",
 "propagateClick": false,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "IconButton36540"
 },
 "shadow": false
},
{
 "id": "AnimatedImageResource_5FFEA99E_7EE1_0B9F_41D3_105D8D38F786",
 "frameDuration": 41,
 "levels": [
  {
   "width": 380,
   "height": 480,
   "url": "media/panorama_700EC90A_7EA7_0867_41DC_7014BCEF2918_1_HS_1_0.png",
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "id": "viewer_uid5A384A2B_7F9F_08A5_41C3_247C856500C7PhotoAlbumPlayer",
 "viewerArea": "this.viewer_uid5A384A2B_7F9F_08A5_41C3_247C856500C7",
 "class": "PhotoAlbumPlayer"
},
{
 "id": "AnimatedImageResource_5FFE999E_7EE1_0B9F_41CB_26DBE4C56951",
 "frameDuration": 41,
 "levels": [
  {
   "width": 380,
   "height": 570,
   "url": "media/panorama_728CED16_7EA3_086F_41AA_FE2AD5D1A290_1_HS_2_0.png",
   "class": "ImageResourceLevel"
  }
 ],
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "class": "AnimatedImageResource"
}],
 "scrollBarMargin": 2,
 "minWidth": 20,
 "gap": 10,
 "propagateClick": false,
 "vrPolyfillScale": 1,
 "desktopMipmappingEnabled": false,
 "paddingRight": 0,
 "scripts": {
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setOverlayBehaviour": function(overlay, media, action, preventDoubleClick){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(preventDoubleClick){ if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 1000); } }; if(preventDoubleClick && window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getFirstPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData){ audio = audioData.audio; delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "stopGlobalAudios": function(onlyForeground){  var audios = window.currentGlobalAudios; var self = this; if(audios){ Object.keys(audios).forEach(function(key){ var data = audios[key]; if(!onlyForeground || (onlyForeground && !data.asBackground)) { self.stopGlobalAudio(data.audio); } }); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getFirstPlayListWithMedia": function(media, onlySelected){  var playLists = this.getPlayListsWithMedia(media, onlySelected); return playLists.length > 0 ? playLists[0] : undefined; },
  "keepCompVisible": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios).map(function(v) { return v.audio })); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerTextVariable": function(obj){  var property = (function() { switch (obj.get('class')) { case 'Label': return 'text'; case 'Button': case 'BaseButton': return 'label'; case 'HTMLText': return 'html'; } })(); if (property == undefined) return; var re = new RegExp('\\{\\{\\s*(\\w+)\\s*\\}\\}', 'g'); var text = obj.get(property); var data = obj.get('data') || {}; data[property] = text; obj.set('data', data); var updateLabel = function(vars) { var text = data[property]; for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) { var dispatcher = dispatchers[j]; var index = dispatcher.get('selectedIndex'); if (index >= 0) { var srcPropArray = info.src.split('.'); var src = dispatcher.get('items')[index]; if(info.itemCondition !== undefined && !info.itemCondition.call(this, src)) continue; for (var z = 0; z < srcPropArray.length; ++z) src = 'get' in src ? src.get(srcPropArray[z]) : src[srcPropArray[z]]; text = text.replace(info.replace, src); } } } if(text != data[property]) obj.set(property, text); }; var vars = []; var addVars = function(dispatchers, eventName, src, replace, itemCondition) { vars.push({ 'dispatchers': dispatchers, 'eventName': eventName, 'src': src, 'replace': replace, 'itemCondition': itemCondition }); }; var viewerAreaItemCondition = function(item) { var player = item.get('player'); return player !== undefined && player.get('viewerArea') == this.MainViewer; }; while (null != (result = re.exec(text))) { switch (result[1]) { case 'title': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.label', result[0], viewerAreaItemCondition); break; case 'subtitle': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.data.subtitle', result[0], viewerAreaItemCondition); break; } } if (vars.length > 0) { var func = updateLabel.bind(this, vars); for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) dispatchers[j].bind(info.eventName, func, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData) audio = audioData.audio; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback, stopBackgroundAudio){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } var src = this.playGlobalAudio(audio, endCallback); if(stopBackgroundAudio === true){ var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); } return src; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = undefined; if(mediaDispatcher){ var playListsWithMedia = this.getPlayListsWithMedia(mediaDispatcher, true); playListDispatcher = playListsWithMedia.indexOf(playList) != -1 ? playList : (playListsWithMedia.length > 0 ? playListsWithMedia[0] : undefined); } if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } item.bind('begin', onBeginFunction, self); this.executeFunctionWhenChange(playList, index, disposeCallback);  },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext, true); }; playNext(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getKey": function(key){  return window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareSocial": function(socialID, url, deepLink){  if(url == undefined) { url = deepLink ? location.href : location.href.split(location.search||location.hash||/[?#]/)[0]; } else if(deepLink) { url += location.hash; } url = (function(id){ switch(id){ case 'fb': return 'https://www.facebook.com/sharer/sharer.php?u='+url; case 'wa': return 'https://api.whatsapp.com/send/?text='+encodeURIComponent(url); case 'tw': return 'https://twitter.com/intent/tweet?source=webclient&url='+url; default: return undefined; } })(socialID); window.open(url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; } return audio; },
  "_getPlayListsWithViewer": function(viewer){  var playLists = this.getByClassName('PlayList'); var containsViewer = function(playList) { var items = playList.get('items'); for(var j=items.length-1; j>=0; --j) { var item = items[j]; var player = item.get('player'); if(player !== undefined && player.get('viewerArea') == viewer) return true; } return false; }; for(var i=playLists.length-1; i>=0; --i) { if(!containsViewer(playLists[i])) playLists.splice(i, 1); } return playLists; },
  "getPlayListsWithMedia": function(media, onlySelected){  var result = []; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) result.push(playList); } return result; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "playGlobalAudio": function(audio, endCallback, asBackground){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = {'audio': audio, 'asBackground': asBackground || false}; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\\text-align:left\\><SPAN STYLE=\\color:#FFFFFF;font-size:12px;font-family:Verdana\\><span color=\\white\\ font-family=\\Verdana\\ font-size=\\12px\\>' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "_initItemWithComps": function(playList, index, components, eventName, visible, effectToApply, delay, restoreStateAt){  var item = playList.get('items')[index]; var registerVisibility = restoreStateAt > 0; var rootPlayer = this.rootPlayer; var cloneEffect = function(visible) { var klass = effectToApply ? effectToApply.get('class') : undefined; var effect = undefined; switch(klass) { case 'FadeInEffect': case 'FadeOutEffect': effect = rootPlayer.createInstance(visible ? 'FadeInEffect' : 'FadeOutEffect'); break; case 'SlideInEffect': case 'SlideOutEffect': effect = rootPlayer.createInstance(visible ? 'SlideInEffect' : 'SlideOutEffect'); break; } if(effect){ effect.set('duration', effectToApply.get('duration')); effect.set('easing', effectToApply.get('easing')); if(klass.indexOf('Slide') != -1) effect.set(visible ? 'from' : 'to', effectToApply.get(visible ? 'to' : 'from')); } return effect; }; var endFunc = function() { for(var i = 0, count = components.length; i<count; ++i) { var component = components[i]; if(restoreStateAt > 0){ this.setComponentVisibility(component, !visible, 0, cloneEffect(!visible)); } else { var key = 'visibility_' + component.get('id'); if(this.existsKey(key)) { if(this.getKey(key)) this.setComponentVisibility(component, true, 0, cloneEffect(true)); else this.setComponentVisibility(component, false, 0, cloneEffect(false)); this.unregisterKey(key); } } } item.unbind('end', endFunc, this); if(addMediaEndEvent) media.unbind('end', endFunc, this); }; var stopFunc = function() { item.unbind('stop', stopFunc, this, true); item.unbind('stop', stopFunc, this); item.unbind('begin', stopFunc, this, true); item.unbind('begin', stopFunc, this); for(var i = 0, count = components.length; i<count; ++i) { this.keepCompVisible(components[i], false); } }; var addEvent = function(eventName, delay, restoreStateAt){ var changeFunc = function(){ var changeVisibility = function(component, visible, effect) { rootPlayer.setComponentVisibility(component, visible, delay, effect, visible ? 'showEffect' : 'hideEffect', false); if(restoreStateAt > 0){ var time = delay + restoreStateAt + (effect != undefined ? effect.get('duration') : 0); rootPlayer.setComponentVisibility(component, !visible, time, cloneEffect(!visible), visible ? 'hideEffect' : 'showEffect', true); } }; for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; if(visible == 'toggle'){ if(!component.get('visible')) changeVisibility(component, true, cloneEffect(true)); else changeVisibility(component, false, cloneEffect(false)); } else { changeVisibility(component, visible, cloneEffect(visible)); } } item.unbind(eventName, changeFunc, this); }; item.bind(eventName, changeFunc, this) }; if(eventName == 'begin'){ for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; this.keepCompVisible(component, true); if(registerVisibility) { var key = 'visibility_' + component.get('id'); this.registerKey(key, component.get('visible')); } } item.bind('stop', stopFunc, this, true); item.bind('stop', stopFunc, this); item.bind('begin', stopFunc, this, true); item.bind('begin', stopFunc, this); if(registerVisibility){ item.bind('end', endFunc, this); var media = item.get('media'); var addMediaEndEvent = media.get('loop') != undefined && !(media.get('loop')); if(addMediaEndEvent) media.bind('end', endFunc, this); } } else if(eventName == 'end' && restoreStateAt > 0){ addEvent('begin', restoreStateAt, 0); restoreStateAt = 0; } if(eventName != undefined) addEvent(eventName, delay, restoreStateAt); }
 },
 "shadow": false
};


	function HistoryData(playList) {
		this.playList = playList;
		this.list = [];
		this.pointer = -1;
	}

	HistoryData.prototype.add = function(index){
		if(this.pointer < this.list.length && this.list[this.pointer] == index) {
			return;
		}
		++this.pointer;
		this.list.splice(this.pointer, this.list.length - this.pointer, index);
	};

	HistoryData.prototype.back = function(){
		if(!this.canBack()) return;
		this.playList.set('selectedIndex', this.list[--this.pointer]);
	};

	HistoryData.prototype.forward = function(){
		if(!this.canForward()) return;
		this.playList.set('selectedIndex', this.list[++this.pointer]);
	};

	HistoryData.prototype.canBack = function(){
		return this.pointer > 0;
	};

	HistoryData.prototype.canForward = function(){
		return this.pointer >= 0 && this.pointer < this.list.length-1;
	};


	if(script.data == undefined)
		script.data = {};
	script.data["history"] = {};   

	TDV.PlayerAPI.defineScript(script);
})();
