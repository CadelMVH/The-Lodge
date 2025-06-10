TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "id": "panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_0.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_0_t.jpg"
   },
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_1.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_1_t.jpg"
   }
  ],
  "pitch": 0,
  "frameTransitionTime": 500,
  "hfov": 360,
  "class": "LivePanorama",
  "label": "Entry",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_1_t.jpg",
  "frameDisplayTime": 3000,
  "vfov": 180,
  "mapLocations": [
   {
    "x": 310.43,
    "y": 279.39,
    "class": "PanoramaMapLocation",
    "angle": 412.4,
    "map": {
     "fieldOfViewOverlayInsideColor": "#0066CC",
     "fieldOfViewOverlayRadiusScale": 0.13,
     "fieldOfViewOverlayInsideOpacity": 0.17,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "minimumZoomFactor": 0.5,
     "overlays": [
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "id": "overlay_5BCEA509_5430_AA77_41BF_7863BCC2868C",
       "map": {
        "offsetY": 0,
        "x": 265.74,
        "width": 90,
        "y": 234.76,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_0_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 265.43,
        "y": 234.39,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_0.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "id": "overlay_45F0CF92_5437_D59A_41BD_C44E86BA06E9",
       "map": {
        "offsetY": 0,
        "x": 240.38,
        "width": 90,
        "y": 657.98,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_1_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 240.08,
        "y": 657.62,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_1.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "id": "overlay_455DFCC2_5437_7BFA_41CB_28A45F9E3FF6",
       "map": {
        "offsetY": 0,
        "x": 667.13,
        "width": 90,
        "y": 336.99,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_2_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 666.85,
        "y": 336.65,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_2.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "id": "overlay_45147A79_5431_5E96_41D1_00B9F4A9CAD5",
       "map": {
        "offsetY": 0,
        "x": 1223.97,
        "width": 90,
        "y": 334.24,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_3_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 1223.6,
        "y": 334.07,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_3.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "id": "overlay_451FBD28_5431_DAB6_41B8_DFEE1BC22991",
       "map": {
        "offsetY": 0,
        "x": 1249.75,
        "width": 90,
        "y": 630.43,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_4_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 1249.49,
        "y": 630.22,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_4.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "id": "overlay_44A6ED0A_5430_DA8A_41CC_04341F169612",
       "map": {
        "offsetY": 0,
        "x": 1626.34,
        "width": 90,
        "y": 341.31,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_5_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 1626.1,
        "y": 341.05,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_5.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "id": "overlay_45EFB563_5433_AABA_41AF_CC47A57B5287",
       "map": {
        "offsetY": 0,
        "x": 1939.02,
        "width": 90,
        "y": 473.94,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_6_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 1938.79,
        "y": 473.61,
        "class": "HotspotMapOverlayImage",
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_6.png"
          }
         ]
        }
       },
       "useHandCursor": true
      }
     ],
     "width": 2172,
     "id": "map_5A214180_5471_EA76_41CA_8DC0B6E70592",
     "height": 910,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 670,
        "class": "ImageResourceLevel",
        "width": 1600,
        "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592.jpeg"
       },
       {
        "height": 335,
        "class": "ImageResourceLevel",
        "width": 800,
        "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_lq.jpeg",
        "grayscale": true
       }
      ]
     },
     "initialZoomFactor": 1,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "class": "Map",
     "label": "The lodge lot model floorplan",
     "thumbnailUrl": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_t.jpg",
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1.2
    }
   }
  ],
  "partial": false
 },
 {
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "gyroscopeEnabled": true,
  "buttonZoomOut": {
   "paddingTop": 0,
   "toolTipFontWeight": "normal",
   "horizontalAlign": "center",
   "mode": "push",
   "toolTipTextShadowOpacity": 0,
   "width": 30,
   "toolTipShadowVerticalLength": 0,
   "height": 30,
   "toolTipOpacity": 1,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "borderSize": 0,
   "toolTipFontFamily": "Arial",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowColor": "#333333",
   "minWidth": 0,
   "class": "IconButton",
   "toolTipShadowHorizontalLength": 0,
   "cursor": "hand",
   "borderRadius": 0,
   "toolTipShadowSpread": 0,
   "toolTipPaddingLeft": 6,
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "data": {
    "name": "Button1207"
   },
   "toolTipBorderRadius": 3,
   "minHeight": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "paddingLeft": 0,
   "toolTipPaddingRight": 6,
   "toolTipDisplayTime": 600,
   "toolTipBorderSize": 1,
   "backgroundOpacity": 0,
   "toolTipFontStyle": "normal",
   "toolTip": "Zoom Out",
   "toolTipPaddingTop": 4,
   "toolTipBorderColor": "#767676",
   "transparencyActive": false,
   "toolTipPaddingBottom": 4,
   "toolTipShadowOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "verticalAlign": "middle",
   "toolTipFontSize": 12,
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "paddingRight": 0,
   "toolTipShadowBlurRadius": 3
  },
  "buttonRestart": {
   "paddingTop": 0,
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "height": 38,
   "borderSize": 0,
   "minWidth": 0,
   "class": "IconButton",
   "cursor": "hand",
   "borderRadius": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "data": {
    "name": "Button1195"
   },
   "minHeight": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "transparencyActive": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "paddingRight": 0
  },
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "buttonPlayLeft": {
   "paddingTop": 0,
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "height": 38,
   "borderSize": 0,
   "minWidth": 0,
   "class": "IconButton",
   "cursor": "hand",
   "borderRadius": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "data": {
    "name": "Button1196"
   },
   "minHeight": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "transparencyActive": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "paddingRight": 0
  },
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation",
  "buttonPlayRight": {
   "paddingTop": 0,
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "height": 38,
   "borderSize": 0,
   "minWidth": 0,
   "class": "IconButton",
   "cursor": "hand",
   "borderRadius": 0,
   "shadow": false,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "data": {
    "name": "Button1198"
   },
   "minHeight": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "transparencyActive": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "paddingRight": 0
  },
  "buttonZoomIn": {
   "paddingTop": 0,
   "toolTipFontWeight": "normal",
   "horizontalAlign": "center",
   "mode": "push",
   "toolTipTextShadowOpacity": 0,
   "width": 30,
   "toolTipShadowVerticalLength": 0,
   "height": 30,
   "toolTipOpacity": 1,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "borderSize": 0,
   "toolTipFontFamily": "Arial",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowColor": "#333333",
   "minWidth": 0,
   "class": "IconButton",
   "toolTipShadowHorizontalLength": 0,
   "cursor": "hand",
   "borderRadius": 0,
   "toolTipShadowSpread": 0,
   "toolTipPaddingLeft": 6,
   "shadow": false,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "data": {
    "name": "Button1208"
   },
   "toolTipBorderRadius": 3,
   "minHeight": 0,
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "paddingLeft": 0,
   "toolTipPaddingRight": 6,
   "toolTipDisplayTime": 600,
   "toolTipBorderSize": 1,
   "backgroundOpacity": 0,
   "toolTipFontStyle": "normal",
   "toolTip": "Zoom In",
   "toolTipPaddingTop": 4,
   "toolTipBorderColor": "#767676",
   "transparencyActive": false,
   "toolTipPaddingBottom": 4,
   "toolTipShadowOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "verticalAlign": "middle",
   "toolTipFontSize": 12,
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "paddingRight": 0,
   "toolTipShadowBlurRadius": 3
  },
  "buttonPause": {
   "paddingTop": 0,
   "horizontalAlign": "center",
   "mode": "toggle",
   "width": 40,
   "height": 40,
   "borderSize": 0,
   "minWidth": 0,
   "class": "IconButton",
   "cursor": "hand",
   "borderRadius": 0,
   "shadow": false,
   "id": "IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
   "data": {
    "name": "Button1167"
   },
   "minHeight": 0,
   "iconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D.png",
   "paddingLeft": 0,
   "transparencyActive": false,
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "pressedIconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D_pressed.png",
   "paddingRight": 0
  }
 },
 {
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "viewerArea": {
   "playbackBarHeadOpacity": 1,
   "progressBottom": 2,
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "progressBorderRadius": 4,
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBarBorderColor": "#000000",
   "progressBorderSize": 2,
   "toolTipTextShadowBlurRadius": 3,
   "progressBarOpacity": 1,
   "toolTipFontColor": "#606060",
   "playbackBarOpacity": 1,
   "progressBackgroundOpacity": 1,
   "borderSize": 0,
   "toolTipShadowColor": "#333333",
   "playbackBarHeadShadow": true,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "shadow": false,
   "progressBarBackgroundColorDirection": "vertical",
   "class": "ViewerArea",
   "toolTipPaddingLeft": 6,
   "playbackBarHeadBorderSize": 0,
   "progressOpacity": 1,
   "progressRight": 10,
   "toolTipShadowSpread": 0,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadShadowColor": "#000000",
   "minHeight": 1,
   "playbackBarHeadBorderRadius": 0,
   "toolTipBorderSize": 1,
   "toolTipFontStyle": "normal",
   "playbackBarBackgroundOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "playbackBarBorderSize": 2,
   "paddingBottom": 0,
   "toolTipPaddingTop": 4,
   "transitionMode": "blending",
   "playbackBarProgressOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "progressLeft": 10,
   "paddingTop": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBarBorderSize": 1,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipFontWeight": "normal",
   "toolTipShadowBlurRadius": 3,
   "playbackBarRight": 0,
   "toolTipTextShadowOpacity": 0,
   "playbackBarBorderRadius": 4,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarHeadHeight": 30,
   "height": "100%",
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipOpacity": 1,
   "width": "100%",
   "playbackBarLeft": 0,
   "toolTipShadowVerticalLength": 0,
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadWidth": 6,
   "playbackBarHeight": 20,
   "toolTipFontFamily": "Arial",
   "toolTipBackgroundColor": "#F6F6F6",
   "progressBarBorderRadius": 4,
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderSize": 0,
   "minWidth": 1,
   "progressBorderColor": "#AAAAAA",
   "top": "0%",
   "toolTipShadowHorizontalLength": 0,
   "transitionDuration": 500,
   "borderRadius": 0,
   "playbackBarBorderColor": "#AAAAAA",
   "id": "MapViewer",
   "toolTipBorderRadius": 3,
   "paddingLeft": 0,
   "progressBackgroundColorDirection": "vertical",
   "toolTipDisplayTime": 600,
   "playbackBarBottom": 0,
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "toolTipShadowOpacity": 1,
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipBorderColor": "#767676",
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "left": "0%",
   "toolTipFontSize": 12,
   "progressHeight": 20,
   "toolTipPaddingRight": 6,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "paddingRight": 0,
   "playbackBarHeadShadowBlurRadius": 3
  },
  "buttonZoomIn": "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
  "buttonZoomOut": "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 21.33,
     "yawSpeed": 41.85,
     "targetPitch": 1.03,
     "targetYaw": 124.71,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "longest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -96.72,
   "pitch": -6.42
  }
 },
 {
  "hfovMax": 120,
  "id": "panorama_5F5865ED_5357_FCED_41C5_19D077869660",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5F5865ED_5357_FCED_41C5_19D077869660_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5F5865ED_5357_FCED_41C5_19D077869660.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5F5865ED_5357_FCED_41C5_19D077869660_t.jpg"
   }
  ],
  "pitch": 0,
  "partial": false,
  "hfov": 360,
  "class": "Panorama",
  "label": "Living Room",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_5F5865ED_5357_FCED_41C5_19D077869660_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 285.08,
    "y": 702.62,
    "class": "PanoramaMapLocation",
    "angle": 98.52,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "targetPitch": -2.14,
     "targetYaw": 7.42,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "longest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5F5865ED_5357_FCED_41C5_19D077869660_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -125.18,
   "pitch": -5.34
  }
 },
 {
  "hfovMax": 120,
  "id": "panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_0.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_0_t.jpg"
   },
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_1.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_1_t.jpg"
   },
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_2_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_2.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_2_t.jpg"
   }
  ],
  "pitch": 0,
  "frameTransitionTime": 1500,
  "hfov": 360,
  "class": "LivePanorama",
  "label": "Kitchen",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_1_t.jpg",
  "frameDisplayTime": 2000,
  "vfov": 180,
  "mapLocations": [
   {
    "x": 711.85,
    "y": 381.65,
    "class": "PanoramaMapLocation",
    "angle": 399.94,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ],
  "partial": false
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 30.96,
     "yawSpeed": 61.2,
     "targetPitch": 0.74,
     "targetYaw": -1.96,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "path": "shortest"
    },
    {
     "pitchSpeed": 36.31,
     "yawSpeed": 71.95,
     "targetPitch": 2.13,
     "targetYaw": 121.94,
     "class": "TargetPanoramaCameraMovement",
     "easing": "quart_in_out",
     "path": "shortest"
    },
    {
     "pitchSpeed": 52.36,
     "yawSpeed": 104.2,
     "targetPitch": 0.16,
     "targetYaw": 35.34,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -133.52,
   "pitch": -5.42
  }
 },
 {
  "hfovMax": 120,
  "id": "panorama_587E3C83_5430_BA7A_41C1_749A5805FE83",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_587E3C83_5430_BA7A_41C1_749A5805FE83.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_t.jpg"
   }
  ],
  "pitch": 0,
  "partial": false,
  "hfov": 360,
  "class": "Panorama",
  "label": "Hallway",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1268.6,
    "y": 379.07,
    "class": "PanoramaMapLocation",
    "angle": 59.4,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 33.1,
     "yawSpeed": 65.5,
     "targetPitch": -3.43,
     "targetYaw": -146.66,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetPitch": -4.71,
     "targetYaw": 117.07,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 30.36,
   "pitch": 0.23
  }
 },
 {
  "hfovMax": 150,
  "id": "panorama_58182933_5430_DA9A_41D1_DDDE92320C10",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_0.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_0_t.jpg"
   },
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_1.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_1_t.jpg"
   },
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_2_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_2.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_2_t.jpg"
   },
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_3_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_3.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_3_t.jpg"
   }
  ],
  "pitch": 0,
  "frameTransitionTime": 900,
  "hfov": 360,
  "class": "LivePanorama",
  "label": "Bathroom",
  "hfovMin": 37,
  "thumbnailUrl": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_2_t.jpg",
  "frameDisplayTime": 1200,
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1294.49,
    "y": 675.22,
    "class": "PanoramaMapLocation",
    "angle": 43.01,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ],
  "partial": false
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 21.33,
     "yawSpeed": 41.85,
     "targetPitch": -7.4,
     "targetYaw": -123.86,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "path": "longest"
    },
    {
     "pitchSpeed": 13.84,
     "yawSpeed": 26.8,
     "targetPitch": -58.81,
     "targetYaw": -17.91,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "path": "longest"
    },
    {
     "pitchSpeed": 40.59,
     "hfovSpeed": 80.55,
     "yawSpeed": 80.55,
     "targetHfov": 103,
     "targetPitch": -6.37,
     "targetYaw": -47.6,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_58182933_5430_DA9A_41D1_DDDE92320C10_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 122,
   "class": "PanoramaCameraPosition",
   "yaw": 15.01,
   "pitch": -3.04
  }
 },
 {
  "hfovMax": 145,
  "id": "panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_0.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_0_t.jpg"
   },
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_1.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_1_t.jpg"
   },
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_2_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_2.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_2_t.jpg"
   }
  ],
  "pitch": 0,
  "frameTransitionTime": 5000,
  "hfov": 360,
  "class": "LivePanorama",
  "label": "Master Bedroom",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_1_t.jpg",
  "frameDisplayTime": 5000,
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1671.1,
    "y": 386.05,
    "class": "PanoramaMapLocation",
    "angle": 61.88,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ],
  "partial": false
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 28.82,
     "yawSpeed": 56.9,
     "targetPitch": -5.64,
     "targetYaw": -39.87,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 116.23,
   "pitch": -0.98
  }
 },
 {
  "hfovMax": 120,
  "id": "panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_t.jpg"
   }
  ],
  "pitch": 0,
  "partial": false,
  "hfov": 360,
  "class": "Panorama",
  "label": "Laundry",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_t.jpg",
  "vfov": 180,
  "mapLocations": [
   {
    "x": 1983.79,
    "y": 518.61,
    "class": "PanoramaMapLocation",
    "angle": 47.52,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "restartMovementDelay": 2000,
   "id": "sequence_5B65FF61_5451_D6B6_41D5_0973A72DCB5D",
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "pitchSpeed": 33.1,
     "hfovSpeed": 65.5,
     "yawSpeed": 65.5,
     "targetHfov": 99,
     "targetPitch": -4.82,
     "targetYaw": -41.29,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "hfovSpeed": 33.25,
     "yawSpeed": 33.25,
     "targetHfov": 150,
     "targetPitch": -5.28,
     "targetYaw": -122.56,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "path": "shortest"
    }
   ],
   "restartMovementOnUserInteraction": true
  },
  "initialSequence": "this.sequence_5B65FF61_5451_D6B6_41D5_0973A72DCB5D",
  "id": "panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 165.15,
   "pitch": 1.93
  },
  "timeToIdle": 2000
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_camera",
    "media": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A1F1E7A_5A6E_9773_41C3_5CC4CBDE3BAB, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "id": "PanoramaPlayListItem_4A1F1E7A_5A6E_9773_41C3_5CC4CBDE3BAB",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_5F5865ED_5357_FCED_41C5_19D077869660_camera",
    "media": "this.panorama_5F5865ED_5357_FCED_41C5_19D077869660",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4A195E7C_5A6E_9777_41A9_4E0D6BDBD310, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "id": "PanoramaPlayListItem_4A195E7C_5A6E_9777_41A9_4E0D6BDBD310",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_camera",
    "media": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4AE6FE7C_5A6E_9777_41C2_6DC9B9C66E14, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "id": "PanoramaPlayListItem_4AE6FE7C_5A6E_9777_41C2_6DC9B9C66E14",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_camera",
    "media": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4AE66E7C_5A6E_9777_41A8_9E97E8FBF0BE, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "id": "PanoramaPlayListItem_4AE66E7C_5A6E_9777_41A8_9E97E8FBF0BE",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10_camera",
    "media": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4AE7FE7C_5A6E_9777_41D3_41A96EF4626B, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "id": "PanoramaPlayListItem_4AE7FE7C_5A6E_9777_41D3_41A96EF4626B",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_camera",
    "media": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4AE4AE7C_5A6E_9777_41B2_A8735AEB2917, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "id": "PanoramaPlayListItem_4AE4AE7C_5A6E_9777_41B2_A8735AEB2917",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_camera",
    "media": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_4AE43E7C_5A6E_9777_41CF_F8D90CEBF997, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
    "id": "PanoramaPlayListItem_4AE43E7C_5A6E_9777_41CF_F8D90CEBF997",
    "end": "this.trigger('tourEnded')",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "media": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "media": "this.panorama_5F5865ED_5357_FCED_41C5_19D077869660",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5F5865ED_5357_FCED_41C5_19D077869660_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
    "media": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "media": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "media": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "media": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 0)",
    "media": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_camera"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 0, 1)",
    "media": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 1, 2)",
    "media": "this.panorama_5F5865ED_5357_FCED_41C5_19D077869660",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5F5865ED_5357_FCED_41C5_19D077869660_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 2, 3)",
    "media": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 3, 4)",
    "media": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 4, 5)",
    "media": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 5, 6)",
    "media": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 6, 0)",
    "media": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_camera"
   }
  ]
 },
 "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592",
 {
  "class": "PlayList",
  "id": "playList_4A135E78_5A6E_977F_41A3_839464949AED",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_4A10AE78_5A6E_977F_41BB_1B2DF5B2F7A4",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 }
], "children": [
 {
  "playbackBarHeadOpacity": 1,
  "progressBottom": 1,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBorderRadius": 4,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderColor": "#000000",
  "progressBorderSize": 2,
  "toolTipTextShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "toolTipFontColor": "#606060",
  "playbackBarOpacity": 1,
  "progressBackgroundOpacity": 1,
  "borderSize": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadow": true,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "shadow": false,
  "progressBarBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBorderSize": 0,
  "progressOpacity": 1,
  "progressRight": 10,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowColor": "#000000",
  "minHeight": 50,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderSize": 1,
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderSize": 2,
  "paddingBottom": 0,
  "toolTipPaddingTop": 4,
  "transitionMode": "blending",
  "playbackBarProgressOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "progressLeft": 10,
  "paddingTop": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBorderSize": 1,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontWeight": "normal",
  "toolTipShadowBlurRadius": 3,
  "playbackBarRight": 0,
  "toolTipTextShadowOpacity": 0,
  "playbackBarBorderRadius": 4,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadHeight": 30,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipOpacity": 1,
  "playbackBarLeft": 0,
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarHeight": 20,
  "toolTipFontFamily": "Arial",
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBarBorderRadius": 4,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "minWidth": 100,
  "progressBorderColor": "#AAAAAA",
  "top": 77,
  "toolTipShadowHorizontalLength": 0,
  "transitionDuration": 500,
  "borderRadius": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "bottom": 92,
  "id": "MainViewer",
  "toolTipBorderRadius": 3,
  "paddingLeft": 0,
  "progressBackgroundColorDirection": "vertical",
  "toolTipDisplayTime": 600,
  "playbackBarBottom": 10,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipShadowOpacity": 1,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "left": 0,
  "toolTipFontSize": 12,
  "right": 0,
  "toolTipPaddingRight": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressHeight": 20
 },
 {
  "gap": 0,
  "backgroundColor": [
   "#000000"
  ],
  "horizontalAlign": "left",
  "itemThumbnailShadow": true,
  "itemBorderRadius": 0,
  "itemThumbnailOpacity": 1,
  "scrollBarColor": "#FFFFFF",
  "itemOpacity": 1,
  "itemVerticalAlign": "middle",
  "itemPaddingLeft": 3,
  "layout": "vertical",
  "itemLabelFontColor": "#FFFFFF",
  "borderSize": 0,
  "scrollBarWidth": 10,
  "itemBackgroundColor": [],
  "shadow": false,
  "class": "ThumbnailList",
  "itemThumbnailShadowBlurRadius": 4,
  "minHeight": 0,
  "selectedItemLabelFontWeight": "bold",
  "itemBackgroundColorRatios": [],
  "backgroundOpacity": 0.2,
  "scrollBarMargin": 2,
  "itemThumbnailShadowSpread": 1,
  "itemLabelFontStyle": "normal",
  "paddingBottom": 10,
  "maxHeight": 800,
  "itemThumbnailBorderRadius": 5,
  "itemThumbnailShadowOpacity": 0.8,
  "paddingTop": 10,
  "itemHorizontalAlign": "center",
  "width": 158.5,
  "playList": "this.thumbnaillist5245_playlist",
  "itemThumbnailHeight": 70,
  "itemLabelFontSize": 14,
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontWeight": "normal",
  "itemLabelTextDecoration": "none",
  "backgroundColorDirection": "vertical",
  "itemThumbnailShadowHorizontalLength": 3,
  "itemPaddingBottom": 3,
  "scrollBarVisible": "rollOver",
  "itemLabelGap": 8,
  "minWidth": 0,
  "itemLabelFontFamily": "Arial",
  "top": "8.02%",
  "maxWidth": 800,
  "itemThumbnailShadowVerticalLength": 3,
  "borderRadius": 5,
  "itemThumbnailWidth": 100,
  "itemPaddingRight": 3,
  "id": "thumbnaillist5245",
  "itemThumbnailShadowColor": "#000000",
  "itemLabelPosition": "bottom",
  "paddingLeft": 20,
  "data": {
   "name": "ThumbnailList28173"
  },
  "itemPaddingTop": 3,
  "itemThumbnailScaleMode": "fit_outside",
  "itemMode": "normal",
  "backgroundColorRatios": [
   0
  ],
  "bottom": "10.1%",
  "scrollBarOpacity": 0.5,
  "verticalAlign": "top",
  "right": "0%",
  "paddingRight": 20,
  "itemBackgroundColorDirection": "vertical"
 },
 {
  "gap": 6,
  "children": [
   {
    "paddingTop": 0,
    "fontSize": 40,
    "width": 374,
    "textDecoration": "none",
    "height": "100%",
    "horizontalAlign": "center",
    "text": "The Lodge",
    "fontFamily": "Arial",
    "borderSize": 0,
    "fontStyle": "normal",
    "minWidth": 30,
    "class": "Label",
    "fontWeight": "bold",
    "borderRadius": 0,
    "shadow": false,
    "id": "label4056",
    "data": {
     "name": "Label28174"
    },
    "minHeight": 16,
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "paddingRight": 0,
    "fontColor": "#666666"
   },
   {
    "gap": 10,
    "children": [
     {
      "paddingTop": 0,
      "toolTipFontWeight": "normal",
      "horizontalAlign": "center",
      "mode": "toggle",
      "toolTipTextShadowOpacity": 0,
      "width": 40,
      "toolTipShadowVerticalLength": 0,
      "height": 40,
      "toolTipOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontColor": "#606060",
      "borderSize": 0,
      "toolTipFontFamily": "Arial",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowColor": "#333333",
      "minWidth": 0,
      "class": "IconButton",
      "toolTipShadowHorizontalLength": 0,
      "cursor": "hand",
      "borderRadius": 0,
      "toolTipShadowSpread": 0,
      "toolTipPaddingLeft": 6,
      "shadow": false,
      "id": "IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
      "data": {
       "name": "Button49930"
      },
      "toolTipBorderRadius": 3,
      "minHeight": 0,
      "iconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75.png",
      "paddingLeft": 0,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "toolTipBorderSize": 1,
      "toolTipFontStyle": "normal",
      "toolTip": "Mute",
      "toolTipPaddingTop": 4,
      "toolTipBorderColor": "#767676",
      "transparencyActive": true,
      "toolTipPaddingBottom": 4,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "verticalAlign": "middle",
      "toolTipFontSize": 12,
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "pressedIconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75_pressed.png",
      "paddingRight": 0,
      "toolTipShadowBlurRadius": 3
     },
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     {
      "gap": 5,
      "children": [
       {
        "gap": 10,
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247"
        ],
        "paddingTop": 0,
        "backgroundColor": [
         "#FFFFFF"
        ],
        "creationPolicy": "inAdvance",
        "horizontalAlign": "center",
        "width": 47,
        "height": "100%",
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "overflow": "hidden",
        "layout": "vertical",
        "borderSize": 0,
        "backgroundColorDirection": "vertical",
        "scrollBarWidth": 10,
        "minWidth": 20,
        "scrollBarVisible": "rollOver",
        "class": "Container",
        "borderRadius": 0,
        "shadow": false,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "data": {
         "name": "Container1202"
        },
        "minHeight": 20,
        "paddingLeft": 0,
        "scrollBarMargin": 2,
        "backgroundOpacity": 1,
        "backgroundColorRatios": [
         0
        ],
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5,
        "paddingRight": 0
       },
       "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40"
      ],
      "paddingTop": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "creationPolicy": "inAdvance",
      "horizontalAlign": "center",
      "width": 133,
      "height": "100%",
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "overflow": "hidden",
      "layout": "horizontal",
      "borderSize": 0,
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "minWidth": 20,
      "scrollBarVisible": "rollOver",
      "class": "Container",
      "borderRadius": 0,
      "shadow": false,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "data": {
       "name": "Container1200"
      },
      "minHeight": 20,
      "paddingLeft": 0,
      "scrollBarMargin": 2,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0
     },
     {
      "gap": 10,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "paddingTop": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "creationPolicy": "inAdvance",
      "horizontalAlign": "center",
      "width": 85,
      "height": "100%",
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "overflow": "hidden",
      "layout": "horizontal",
      "borderSize": 0,
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "minWidth": 20,
      "scrollBarVisible": "rollOver",
      "class": "Container",
      "borderRadius": 0,
      "shadow": false,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "data": {
       "name": "Container1206"
      },
      "minHeight": 20,
      "paddingLeft": 0,
      "scrollBarMargin": 2,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "scrollBarOpacity": 0.5,
      "paddingRight": 0
     }
    ],
    "paddingTop": 0,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "creationPolicy": "inAdvance",
    "horizontalAlign": "center",
    "width": 805.5,
    "height": "93.478%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "overflow": "hidden",
    "layout": "horizontal",
    "borderSize": 0,
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "minWidth": 468,
    "scrollBarVisible": "rollOver",
    "class": "Container",
    "borderRadius": 0,
    "shadow": false,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "data": {
     "name": "Container1194"
    },
    "minHeight": 20,
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "backgroundOpacity": 1,
    "backgroundColorRatios": [
     0
    ],
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5,
    "paddingRight": 0
   },
   {
    "gap": 13,
    "itemHorizontalAlign": "center",
    "horizontalAlign": "left",
    "itemThumbnailShadow": true,
    "itemLabelFontWeight": "normal",
    "width": "27.563%",
    "playList": "this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
    "itemBorderRadius": 0,
    "itemBackgroundOpacity": 0,
    "height": 82.5,
    "selectedItemLabelFontColor": "#FFCC00",
    "itemThumbnailOpacity": 1,
    "itemLabelFontSize": 14,
    "scrollBarColor": "#FFFFFF",
    "itemThumbnailHeight": 75,
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailShadowHorizontalLength": 3,
    "layout": "horizontal",
    "itemOpacity": 1,
    "itemLabelTextDecoration": "none",
    "itemVerticalAlign": "middle",
    "borderSize": 0,
    "itemPaddingLeft": 3,
    "itemLabelFontColor": "#FFFFFF",
    "scrollBarWidth": 10,
    "shadow": false,
    "itemPaddingBottom": 3,
    "scrollBarVisible": "rollOver",
    "itemLabelGap": 8,
    "minWidth": 1,
    "class": "ThumbnailList",
    "itemThumbnailShadowVerticalLength": 3,
    "borderRadius": 5,
    "itemLabelFontFamily": "Arial",
    "itemBackgroundColor": [],
    "itemLabelPosition": "bottom",
    "minHeight": 1,
    "itemThumbnailShadowBlurRadius": 8,
    "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B",
    "itemBackgroundColorRatios": [],
    "data": {
     "name": "ThumbnailList35762"
    },
    "backgroundOpacity": 0,
    "itemThumbnailWidth": 100,
    "selectedItemLabelFontWeight": "bold",
    "itemThumbnailShadowColor": "#000000",
    "scrollBarMargin": 2,
    "itemPaddingRight": 3,
    "itemThumbnailShadowOpacity": 0.57,
    "itemThumbnailShadowSpread": 1,
    "itemLabelFontStyle": "normal",
    "itemThumbnailScaleMode": "fit_outside",
    "verticalAlign": "top",
    "itemMode": "normal",
    "paddingBottom": 10,
    "paddingLeft": 20,
    "rollOverItemLabelFontWeight": "bold",
    "itemThumbnailBorderRadius": 5,
    "itemBackgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "itemPaddingTop": 3,
    "paddingRight": 20,
    "paddingTop": 10
   }
  ],
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "creationPolicy": "inAdvance",
  "horizontalAlign": "center",
  "width": "100%",
  "height": 92,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "overflow": "scroll",
  "layout": "horizontal",
  "borderSize": 0,
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "class": "Container",
  "borderRadius": 0,
  "shadow": false,
  "paddingLeft": 0,
  "data": {
   "name": "Container29432"
  },
  "minHeight": 1,
  "bottom": "0%",
  "scrollBarMargin": 2,
  "backgroundOpacity": 0.3,
  "left": "0%",
  "backgroundColorRatios": [
   0,
   1
  ],
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "paddingRight": 0
 },
 {
  "right": "0.17%",
  "horizontalAlign": "center",
  "width": "9.182%",
  "height": "5.352%",
  "url": "skin/Image_306F4727_273A_95B3_41B2_3DF89EEDBF85.png",
  "borderSize": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "minWidth": 1,
  "class": "Image",
  "top": "0.05%",
  "maxWidth": 1467,
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Image_306F4727_273A_95B3_41B2_3DF89EEDBF85",
  "data": {
   "name": "Wave Logo"
  },
  "backgroundOpacity": 0,
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "maxHeight": 817,
  "paddingRight": 0,
  "paddingTop": 0
 },
 {
  "right": "8.53%",
  "horizontalAlign": "center",
  "width": "38.165%",
  "height": "5.33%",
  "url": "skin/Image_3E29962B_272E_B7B3_4191_F996EF0F95BB.png",
  "borderSize": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "minWidth": 1,
  "class": "Image",
  "top": "0.31%",
  "maxWidth": 1700,
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Image_3E29962B_272E_B7B3_4191_F996EF0F95BB",
  "data": {
   "name": "MTViewhomes"
  },
  "backgroundOpacity": 0,
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "maxHeight": 186,
  "paddingRight": 0,
  "paddingTop": 0
 },
 {
  "gap": 10,
  "children": [
   "this.MapViewer"
  ],
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "creationPolicy": "inAdvance",
  "horizontalAlign": "left",
  "width": "28.721%",
  "height": "26.462%",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "overflow": "scroll",
  "backgroundColorDirection": "vertical",
  "layout": "absolute",
  "borderSize": 0,
  "scrollBarWidth": 10,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "class": "Container",
  "top": "1.82%",
  "shadow": false,
  "borderRadius": 0,
  "id": "Container_581FBEE1_4338_67EB_41B1_0EF3FEBC0B73",
  "data": {
   "name": "Container24488"
  },
  "minHeight": 1,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0.3,
  "left": "0.63%",
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingLeft": 0,
  "verticalAlign": "top",
  "paddingBottom": 0,
  "paddingRight": 0
 }
], 
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "paddingTop": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "width": "100%",
 "height": "100%",
 "scripts": {
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getKey": function(key){  return window[key]; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "overflow": "visible",
 "layout": "absolute",
 "borderSize": 0,
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "vrPolyfillScale": 0.88,
 "buttonToggleMute": "this.IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 20,
 "id": "rootPlayer",
 "data": {
  "name": "Player28156"
 },
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "start": "this.syncPlaylists([this.thumbnaillist5245_playlist,this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_4A10AE78_5A6E_977F_41BB_1B2DF5B2F7A4.set('selectedIndex', 0)",
 "paddingRight": 0
})