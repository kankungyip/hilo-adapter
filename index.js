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

var WebSound = require('hilojs/media/WebSound')

var Ease = require('hilojs/tween/Ease')
var Tween = require('hilojs/tween/Tween')

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
module.exports.Mixin = Mixin

// fixed: Hilo.getElementRect
if (!window.getComputedStyle) {
  window.getComputedStyle = function (elem) {
    return elem.style
  }
}

// Mixins
Hilo.CacheMixin = CacheMixin
Hilo.EventMixin = EventMixin

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
    properties.canvas = canvas
    Hilo.Stage.superclass.constructor.call(this, properties)

    // fixed: Stage.updateViewport
    canvas.parentNode = document.body
  },
})
