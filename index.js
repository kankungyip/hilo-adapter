require('./weapp-adapter')

var { Mixin } = require('lodash-decorators')

var Class = require('hilojs/core/Class')
var Hilo = require('hilojs/core/Hilo')

var EventMixin = require('hilojs/event/EventMixin')

var Camera = require('hilojs/game/Camera')
var Camera3d = require('hilojs/game/Camera3d')
var ParticleSystem = require('hilojs/game/ParticleSystem')

var Matrix = require('hilojs/geom/Matrix')

var ImageLoader = require('hilojs/loader/ImageLoader')
var ScriptLoader = require('hilojs/loader/ScriptLoader')
var LoadQueue = require('hilojs/loader/LoadQueue')

var HTMLAudio = require('hilojs/media/HTMLAudio')
var WebAudio = require('hilojs/media/WebAudio')
var WebSound = require('hilojs/media/WebSound')

var Renderer = require('hilojs/renderer/Renderer')
var CanvasRenderer = require('hilojs/renderer/CanvasRenderer')
var WebGLRenderer = require('hilojs/renderer/WebGLRenderer')

var Ease = require('hilojs/tween/Ease')
var Tween = require('hilojs/tween/Tween')

var drag = require('hilojs/util/drag')
var TextureAtlas = require('hilojs/util/TextureAtlas')
var Ticker = require('hilojs/util/Ticker')

var Bitmap = require('hilojs/view/Bitmap')
var BitmapText = require('hilojs/view/BitmapText')
var Button = require('hilojs/view/Button')
var CacheMixin = require('hilojs/view/CacheMixin')
var Container = require('hilojs/view/Container')
var Drawable = require('hilojs/view/Drawable')
var Graphics = require('hilojs/view/Graphics')
var Sprite = require('hilojs/view/Sprite')
var Stage = require('hilojs/view/Stage')
var Text = require('hilojs/view/Text')
var View = require('hilojs/view/View')

module.exports['__esModule'] = true
module.exports.default = Hilo
module.exports.Class = Class
module.exports.Mixin = Mixin

// fixed: Hilo.getElementRect
if (!window.getComputedStyle) {
  window.getComputedStyle = function (elem) {
    return elem.style
  }
}

// Mixins
Hilo.EventMixin = EventMixin
Hilo.DraggableMixin = drag
Hilo.CacheMixin = CacheMixin

// Static Objects
Hilo.WebSound = WebSound
Hilo.Ease = Ease

// Classes
Hilo.Camera = Camera
Hilo.Camera3d = Camera3d
Hilo.ParticleSystem = ParticleSystem
Hilo.Matrix = Matrix
Hilo.ImageLoader = ImageLoader
Hilo.ScriptLoader = ScriptLoader
Hilo.LoadQueue = LoadQueue
Hilo.HTMLAudio = HTMLAudio
Hilo.WebAudio = WebAudio
Hilo.Renderer = Renderer
Hilo.CanvasRenderer = CanvasRenderer
Hilo.WebGLRenderer = WebGLRenderer
Hilo.Tween = Tween
Hilo.TextureAtlas = TextureAtlas
Hilo.Ticker = Ticker
Hilo.Bitmap = Bitmap
Hilo.BitmapText = BitmapText
Hilo.Button = Button
Hilo.Container = Container
Hilo.Drawable = Drawable
Hilo.Graphics = Graphics
Hilo.Sprite = Sprite
Hilo.Text = Text
Hilo.View = View

Hilo.Stage = Class.create({
  Extends: Stage,
  constructor: function (properties) {
    properties = properties || {}
    var { width, height } = canvas
    var scale = 1
    if (properties.retina) {
      scale = 0.5
      width *= 2
      height *= 2
    }
    properties.canvas = canvas
    properties.width = width
    properties.height = height
    properties.scaleX = scale
    properties.scaleY = scale
    Hilo.Stage.superclass.constructor.call(this, properties)

    this.scale = scale

    // fixed: Stage.updateViewport
    canvas.parentNode = document.body
  },
})
