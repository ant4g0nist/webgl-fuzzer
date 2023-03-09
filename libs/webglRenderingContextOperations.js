// *
//  * @constructor
//  * @noalias
//  * @private

// function WebGLRenderingContextBase() {}


getContextAttributes = function () {
	return [];
};

/**
 * @return {boolean}
 * @nosideeffects
 */
isContextLost = function () {
	return [];
}

/**
 * @return {!Array.<string>}
 * @nosideeffects
 */
getSupportedExtensions = function () {
	return [];
}

/**
 * Note that this has side effects by enabling the extension even if the
 * result is not used.
 * @param {string} name
 * @return {Object}
 */
getExtension = function (name) {
	var name = Or(["ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_float", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_frag_depth", "EXT_sRGB", "EXT_shader_texture_lod", "EXT_texture_filter_anisotropic", "OES_element_index_uint", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_astc", "WEBGL_compressed_texture_atc", "WEBGL_compressed_texture_etc", "WEBGL_compressed_texture_etc1", "WEBGL_compressed_texture_pvrtc", "WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders", "WEBGL_depth_texture", "WEBGL_draw_buffers", "WEBGL_lose_context"])
	return [name]
}

/**
 * @param {number} texture
 */
activeTexture = function () {
	//gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS-> 80 for safari
	return [`gl.TEXTURE${rint(81)}`]
}

/**
 * @param {WebGLProgram} program
 * @param {WebGLShader} shader
 */
// attachShader = function(){

// }

/**
 * @param {WebGLProgram} program
 * @param {number} index
 * @param {string} name
 */
bindAttribLocation = function () {
	return [Or(programs), number(), "vColor"]
}

/**
 * @param {number} target
 * @param {WebGLBuffer} buffer
 */
bindBuffer = function () {
	var target = Or(["gl.ARRAY_BUFFER", "gl.ELEMENT_ARRAY_BUFFER", "gl.COPY_READ_BUFFER", "gl.COPY_WRITE_BUFFER", "gl.TRANSFORM_FEEDBACK_BUFFER", "gl.UNIFORM_BUFFER", "gl.PIXEL_PACK_BUFFER", "gl.PIXEL_UNPACK_BUFFER"])
	return [target, Or(buffers)]
}

/**
 * @param {number} target
 * @param {WebGLFramebuffer} buffer
 */
bindFramebuffer = function () {
	var target = Or(["gl.FRAMEBUFFER", "gl.DRAW_FRAMEBUFFER", "gl.READ_FRAMEBUFFER"])
	return [target, Or(buffers)]
}

/**
 * @param {number} target
 * @param {WebGLRenderbuffer} buffer
 */
bindRenderbuffer = function () {
	var target = "gl.RENDERBUFFER"
	return [target, Or(renderbuffers)]
}

/**
 * @param {number} target
 * @param {WebGLTexture} texture
 */
bindTexture = function () {
	return ["gl.TEXTURE_2D", Or(textures)]
}


/**
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 */
blendColor = function () {
	return [floatValue(), floatValue(), floatValue(), floatValue()]
}

/**
 * @param {number} mode
 */
blendEquation = function () {
	return [Or(["gl.FUNC_ADD", "gl.FUNC_SUBTRACT", "gl.FUNC_REVERSE_SUBTRACT", "gl.MIN", "gl.MAX"])]
}

/**
 * @param {number} modeRGB
 * @param {number} modeAlpha
 */
blendEquationSeparate = function () {
	return [Or(["gl.FUNC_ADD", "gl.FUNC_SUBTRACT", "gl.FUNC_REVERSE_SUBTRACT", "gl.MIN", "gl.MAX"]), Or(["gl.FUNC_ADD", "gl.FUNC_SUBTRACT", "gl.FUNC_REVERSE_SUBTRACT", "gl.MIN", "gl.MAX"])]
}

/**
 * @param {number} sfactor
 * @param {number} dfactor
 */
blendFunc = function () {
	var sfactor = Or(["gl.ZERO", "gl.ONE", "gl.SRC_COLOR", "gl.ONE_MINUS_SRC_COLOR", "gl.DST_COLOR", "gl.ONE_MINUS_DST_COLOR", "gl.SRC_ALPHA", "gl.ONE_MINUS_SRC_ALPHA", "gl.DST_ALPHA", "gl.ONE_MINUS_DST_ALPHA", "gl.CONSTANT_COLOR", "gl.ONE_MINUS_CONSTANT_COLOR", "gl.CONSTANT_ALPHA", "gl.ONE_MINUS_CONSTANT_ALPHA", "gl.SRC_ALPHA_SATURATE"]);
	var dfactor = Or(["gl.ZERO", "gl.ONE", "gl.SRC_COLOR", "gl.ONE_MINUS_SRC_COLOR", "gl.DST_COLOR", "gl.ONE_MINUS_DST_COLOR", "gl.SRC_ALPHA", "gl.ONE_MINUS_SRC_ALPHA", "gl.DST_ALPHA", "gl.ONE_MINUS_DST_ALPHA", "gl.CONSTANT_COLOR", "gl.ONE_MINUS_CONSTANT_COLOR", "gl.CONSTANT_ALPHA", "gl.ONE_MINUS_CONSTANT_ALPHA", "gl.SRC_ALPHA_SATURATE"]);
	return [sfactor, dfactor]
}

/**
 * @param {number} srcRGB
 * @param {number} dstRGB
 * @param {number} srcAlpha
 * @param {number} dstAlpha
 */
blendFuncSeparate = function () {
	var srcRGB = Or(["gl.ZERO", "gl.ONE", "gl.SRC_COLOR", "gl.ONE_MINUS_SRC_COLOR", "gl.DST_COLOR", "gl.ONE_MINUS_DST_COLOR", "gl.SRC_ALPHA", "gl.ONE_MINUS_SRC_ALPHA", "gl.DST_ALPHA", "gl.ONE_MINUS_DST_ALPHA", "gl.CONSTANT_COLOR", "gl.ONE_MINUS_CONSTANT_COLOR", "gl.CONSTANT_ALPHA", "gl.ONE_MINUS_CONSTANT_ALPHA", "gl.SRC_ALPHA_SATURATE"])
	var dstRGB = Or(["gl.ZERO", "gl.ONE", "gl.SRC_COLOR", "gl.ONE_MINUS_SRC_COLOR", "gl.DST_COLOR", "gl.ONE_MINUS_DST_COLOR", "gl.SRC_ALPHA", "gl.ONE_MINUS_SRC_ALPHA", "gl.DST_ALPHA", "gl.ONE_MINUS_DST_ALPHA", "gl.CONSTANT_COLOR", "gl.ONE_MINUS_CONSTANT_COLOR", "gl.CONSTANT_ALPHA", "gl.ONE_MINUS_CONSTANT_ALPHA", "gl.SRC_ALPHA_SATURATE"])
	var srcAlpha = Or(["gl.ZERO", "gl.ONE", "gl.SRC_COLOR", "gl.ONE_MINUS_SRC_COLOR", "gl.DST_COLOR", "gl.ONE_MINUS_DST_COLOR", "gl.SRC_ALPHA", "gl.ONE_MINUS_SRC_ALPHA", "gl.DST_ALPHA", "gl.ONE_MINUS_DST_ALPHA", "gl.CONSTANT_COLOR", "gl.ONE_MINUS_CONSTANT_COLOR", "gl.CONSTANT_ALPHA", "gl.ONE_MINUS_CONSTANT_ALPHA", "gl.SRC_ALPHA_SATURATE"])
	var dstAlpha = Or(["gl.ZERO", "gl.ONE", "gl.SRC_COLOR", "gl.ONE_MINUS_SRC_COLOR", "gl.DST_COLOR", "gl.ONE_MINUS_DST_COLOR", "gl.SRC_ALPHA", "gl.ONE_MINUS_SRC_ALPHA", "gl.DST_ALPHA", "gl.ONE_MINUS_DST_ALPHA", "gl.CONSTANT_COLOR", "gl.ONE_MINUS_CONSTANT_COLOR", "gl.CONSTANT_ALPHA", "gl.ONE_MINUS_CONSTANT_ALPHA", "gl.SRC_ALPHA_SATURATE"])

	return [srcRGB, dstRGB, srcAlpha, dstAlpha]
}

// *
//  * @param {number} target
//  * @param {ArrayBufferView|ArrayBuffer|number} data
//  * @param {number} usage

// bufferData = function(){

// }

/**
 * @param {number} target
 * @param {number} offset
 * @param {ArrayBufferView|ArrayBuffer} data
 */
// bufferSubData = function(
//     target, offset, data){
// }

/**
 * @param {number} target
 * @return {number}
 */
checkFramebufferStatus = function (target) {
	var target = Or(["gl.FRAMEBUFFER", "gl.DRAW_FRAMEBUFFER", "gl.READ_FRAMEBUFFER"])
	return [target]
}

/**
 * @param {number} mask
 */
clear = function () {
	return [Or("gl.COLOR_BUFFER_BIT", "gl.DEPTH_BUFFER_BIT", "gl.STENCIL_BUFFER_BIT")]
}

/**
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 */
clearColor = function () {
	return [floatValue(), floatValue(), floatValue(), floatValue()]
}

/**
 * @param {number} depth
 */
clearDepth = function () {
	return [floatValue()]
}

/**
 * @param {number} s
 */
clearStencil = function () {
	return [number()]
}

/**
 * @param {boolean} red
 * @param {boolean} green
 * @param {boolean} blue
 * @param {boolean} alpha
 */
colorMask = function () {
	return [floatValue(), floatValue(), floatValue(), floatValue()]
}

/**
 * @param {WebGLShader} shader
 */
// compileShader = function(shader){
// }

/**
 * @param {number} target
 * @param {number} level
 * @param {number} internalformat
 * @param {number} width
 * @param {number} height
 * @param {number} border
 * @param {ArrayBufferView} data
 */
// compressedTexImage2D = function(
//     target, level, internalformat, width, height, border, data){
// }

/**
 * @param {number} target
 * @param {number} level
 * @param {number} xoffset
 * @param {number} yoffset
 * @param {number} width
 * @param {number} height
 * @param {number} format
 * @param {ArrayBufferView} data
 */
// compressedTexSubImage2D = function(
//     target, level, xoffset, yoffset, width, height, format, data){
// }

/**
 * @param {number} target
 * @param {number} level
 * @param {number} format
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number} border
 */
copyTexImage2D = function (target, level, format, x, y, width, height, border) {
	var target = Or(["gl.TEXTURE_2D", "gl.TEXTURE_CUBE_MAP_POSITIVE_X", "gl.TEXTURE_CUBE_MAP_NEGATIVE_X", "gl.TEXTURE_CUBE_MAP_POSITIVE_Y", "gl.TEXTURE_CUBE_MAP_NEGATIVE_Y", "gl.TEXTURE_CUBE_MAP_POSITIVE_Z", "gl.TEXTURE_CUBE_MAP_NEGATIVE_Z"])
	var format = Or(["gl.ALPHA", "gl.RGB", "gl.RGBA", "gl.LUMINANCE", "gl.LUMINANCE_ALPHA"])

	return [target, number(), format, number(), number(), number(), number(), number()]
}

/**
 * @param {number} target
 * @param {number} level
 * @param {number} xoffset
 * @param {number} yoffset
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 */
copyTexSubImage2D = function (target, level, xoffset, yoffset, x, y, width, height) {
	var target = Or(["gl.TEXTURE_2D", "gl.TEXTURE_CUBE_MAP_POSITIVE_X", "gl.TEXTURE_CUBE_MAP_NEGATIVE_X", "gl.TEXTURE_CUBE_MAP_POSITIVE_Y", "gl.TEXTURE_CUBE_MAP_NEGATIVE_Y", "gl.TEXTURE_CUBE_MAP_POSITIVE_Z", "gl.TEXTURE_CUBE_MAP_NEGATIVE_Z"])

	return [target, number(), number(), number(), number(), number(), number(), number()]

}

/**
 * @return {!WebGLBuffer}
 * @nosideeffects
 */
createBuffer = function () {
	return []
}

/**
 * @return {!WebGLFramebuffer}
 * @nosideeffects
 */
createFramebuffer = function () {
	return []
}

/**
 * @return {!WebGLProgram}
 * @nosideeffects
 */
createProgram = function () {
	return []
}

/**
 * @return {!WebGLRenderbuffer}
 * @nosideeffects
 */
createRenderbuffer = function () { return [] }

/**
 * @param {number} type
 * @return {!WebGLShader}
 * @nosideeffects
 */
createShader = function (type) {
	return [Or("gl.VERTEX_SHADER", "gl.FRAGMENT_SHADER")]
}

/**
 * @return {!WebGLTexture}
 * @nosideeffects
 */
createTexture = function () { return [] }

/**
 * @param {number} mode
 */
cullFace = function () {
	return [Or(["gl.FRONT", "gl.BACK", "gl.FRONT_AND_BACK"])]
}

/**
 * @param {WebGLBuffer} buffer
 */
deleteBuffer = function () {
	return [Or(buffers)]
}

/**
 * @param {WebGLFramebuffer} buffer
 */
deleteFramebuffer = function () {
	return [Or(framebuffers)]
}

/**
 * @param {WebGLProgram} program
 */
deleteProgram = function () {
	return [Or(programs)]
}

/**
 * @param {WebGLRenderbuffer} buffer
 */
deleteRenderbuffer = function () {
	return [Or(renderbuffers)]
}

/**
 * @param {WebGLShader} shader
 */
deleteShader = function (shader) {
	return [Or(shaders)]
}

/**
 * @param {WebGLTexture} texture
 */
deleteTexture = function (texture) {
	return [Or(textures)]
}

/**
 * @param {number} func
 */
depthFunc = function (func) {
	return [Or(["gl.NEVER", "gl.LESS", "gl.EQUAL", "gl.LEQUAL", "gl.GREATER", "gl.NOTEQUAL", "gl.GEQUAL", "gl.ALWAYS"])]
}

/**
 * @param {boolean} flag
 */
depthMask = function (flag) {
	return [Or(['true', 'false'])]
}

/**
 * @param {number} nearVal
 * @param {number} farVal
 */
depthRange = function (nearVal, farVal) {
	return [floatRange(0, 1), floatValue(0, 1)]

}

/**
 * @param {WebGLProgram} program
 * @param {WebGLShader} shader
 */
detachShader = function (program, shader) {
	return [Or(programs), Or(shaders)]
}

/**
 * @param {number} flags
 */
disable = function (flags) {
	return [Or(["gl.BLEND", "gl.CULL_FACE", "gl.DEPTH_TEST", "gl.DITHER", "gl.POLYGON_OFFSET_FILL", "gl.SAMPLE_ALPHA_TO_COVERAGE", "gl.SAMPLE_COVERAGE", "gl.SCISSOR_TEST", "gl.STENCIL_TEST", "gl.RASTERIZER_DISCARD"])]
}

/**
 * @param {number} index
 */
disableVertexAttribArray = function (index) {
	return [number()]
}

/**
 * @param {number} mode
 * @param {number} first
 * @param {number} count
 */
drawArrays = function (mode, first, count) {
	var mode = Or(["gl.POINTS", "gl.LINE_STRIP", "gl.LINE_LOOP", "gl.LINES", "gl.TRIANGLE_STRIP", "gl.TRIANGLE_FAN", "gl.TRIANGLES"])
	return [mode, number(), number()]
}

/**
 * @param {number} mode
 * @param {number} count
 * @param {number} type
 * @param {number} offset
 */
drawElements = function (mode, count, type, offset) {
	var mode = Or(["gl.POINTS", "gl.LINE_STRIP", "gl.LINE_LOOP", "gl.LINES", "gl.TRIANGLE_STRIP", "gl.TRIANGLE_FAN", "gl.TRIANGLES"])
	var type = Or(["gl.UNSIGNED_BYTE", "gl.UNSIGNED_SHORT", "gl.UNSIGNED_INT"])
	return [mode, number(), number(), number()]
}

/**
 * @param {number} cap
 */
enable = function (cap) {
	return [Or(["gl.BLEND", "gl.CULL_FACE", "gl.DEPTH_TEST", "gl.DITHER", "gl.POLYGON_OFFSET_FILL", "gl.SAMPLE_ALPHA_TO_COVERAGE", "gl.SAMPLE_COVERAGE", "gl.SCISSOR_TEST", "gl.STENCIL_TEST", "gl.RASTERIZER_DISCARD"])]
}

/**
 * @param {number} index
 */
enableVertexAttribArray = function (index) {
	return [number()]
}

finish = function () { return [] }

flush = function () { return [] }

/**
 * @param {number} target
 * @param {number} attachment
 * @param {number} renderbuffertarget
 * @param {WebGLRenderbuffer} renderbuffer
 */
framebufferRenderbuffer = function (target, attachment, renderbuffertarget, renderbuffer) {
	var target = Or(["gl.FRAMEBUFFER", "gl.DRAW_FRAMEBUFFER", "gl.READ_FRAMEBUFFER"])
	var attachment = Or(["gl.COLOR_ATTACHMENT1", "gl.COLOR_ATTACHMENT2", "gl.COLOR_ATTACHMENT3", "gl.COLOR_ATTACHMENT4", "gl.COLOR_ATTACHMENT5", "gl.COLOR_ATTACHMENT6", "gl.COLOR_ATTACHMENT7", "gl.COLOR_ATTACHMENT8", "gl.COLOR_ATTACHMENT9", "gl.COLOR_ATTACHMENT10", "gl.COLOR_ATTACHMENT11", "gl.COLOR_ATTACHMENT12", "gl.COLOR_ATTACHMENT13", "gl.COLOR_ATTACHMENT14", "gl.COLOR_ATTACHMENT15", "gl.DEPTH_ATTACHMENT", "gl.STENCIL_ATTACHMENT", "gl.DEPTH_STENCIL_ATTACHMENT", "ext.COLOR_ATTACHMENT0_WEBGL", "ext.COLOR_ATTACHMENT1_WEBGL", "ext.COLOR_ATTACHMENT2_WEBGL", "ext.COLOR_ATTACHMENT3_WEBGL", "ext.COLOR_ATTACHMENT4_WEBGL", "ext.COLOR_ATTACHMENT5_WEBGL", "ext.COLOR_ATTACHMENT6_WEBGL", "ext.COLOR_ATTACHMENT7_WEBGL", "ext.COLOR_ATTACHMENT8_WEBGL", "ext.COLOR_ATTACHMENT9_WEBGL", "ext.COLOR_ATTACHMENT10_WEBGL", "ext.COLOR_ATTACHMENT11_WEBGL", "ext.COLOR_ATTACHMENT12_WEBGL", "ext.COLOR_ATTACHMENT13_WEBGL", "ext.COLOR_ATTACHMENT14_WEBGL", "ext.COLOR_ATTACHMENT15_WEBGL"])

	return [target, attachment, "gl.RENDERBUFFER", Or(renderbuffers)]

}

/**
 * @param {number} target
 * @param {number} attachment
 * @param {number} textarget
 * @param {WebGLTexture} texture
 * @param {number} level
 */
framebufferTexture2D = function (target, attachment, textarget, texture, level) {
	var target = Or(["gl.FRAMEBUFFER", "gl.DRAW_FRAMEBUFFER", "gl.READ_FRAMEBUFFER"])
	var attachment = Or(["gl.COLOR_ATTACHMENT1", "gl.COLOR_ATTACHMENT2", "gl.COLOR_ATTACHMENT3", "gl.COLOR_ATTACHMENT4", "gl.COLOR_ATTACHMENT5", "gl.COLOR_ATTACHMENT6", "gl.COLOR_ATTACHMENT7", "gl.COLOR_ATTACHMENT8", "gl.COLOR_ATTACHMENT9", "gl.COLOR_ATTACHMENT10", "gl.COLOR_ATTACHMENT11", "gl.COLOR_ATTACHMENT12", "gl.COLOR_ATTACHMENT13", "gl.COLOR_ATTACHMENT14", "gl.COLOR_ATTACHMENT15", "gl.DEPTH_ATTACHMENT", "gl.STENCIL_ATTACHMENT", "gl.DEPTH_STENCIL_ATTACHMENT", "ext.COLOR_ATTACHMENT0_WEBGL", "ext.COLOR_ATTACHMENT1_WEBGL", "ext.COLOR_ATTACHMENT2_WEBGL", "ext.COLOR_ATTACHMENT3_WEBGL", "ext.COLOR_ATTACHMENT4_WEBGL", "ext.COLOR_ATTACHMENT5_WEBGL", "ext.COLOR_ATTACHMENT6_WEBGL", "ext.COLOR_ATTACHMENT7_WEBGL", "ext.COLOR_ATTACHMENT8_WEBGL", "ext.COLOR_ATTACHMENT9_WEBGL", "ext.COLOR_ATTACHMENT10_WEBGL", "ext.COLOR_ATTACHMENT11_WEBGL", "ext.COLOR_ATTACHMENT12_WEBGL", "ext.COLOR_ATTACHMENT13_WEBGL", "ext.COLOR_ATTACHMENT14_WEBGL", "ext.COLOR_ATTACHMENT15_WEBGL"])
	var textarget = Or(["gl.TEXTURE_2D", "gl.TEXTURE_CUBE_MAP_POSITIVE_X", "gl.TEXTURE_CUBE_MAP_NEGATIVE_X", "gl.TEXTURE_CUBE_MAP_POSITIVE_Y", "gl.TEXTURE_CUBE_MAP_NEGATIVE_Y", "gl.TEXTURE_CUBE_MAP_POSITIVE_Z", "gl.TEXTURE_CUBE_MAP_NEGATIVE_Z"])

	return [target, attachment, textarget, Or(textures), number()]
}

/**
 * @param {number} mode
 */
frontFace = function (mode) {
	return ["gl.CW", "gl.CCW"]
}

/**
 * @param {number} target
 */
generateMipmap = function (target) {
	return [Or(["gl.TEXTURE_2D", "gl.TEXTURE_CUBE_MAP", "gl.TEXTURE_3D", "gl.TEXTURE_2D_ARRAY"])]
}

/**
 * @param {WebGLProgram} program
 * @param {number} index
 * @return {WebGLActiveInfo}
 * @nosideeffects
 */
getActiveAttrib = function (program, index) {

	return [Or(programs), number()]
}

/**
 * @param {WebGLProgram} program
 * @param {number} index
 * @return {WebGLActiveInfo}
 * @nosideeffects
 */
getActiveUniform = function (program, index) {
	return [Or(programs), number()]
}

/**
 * @param {WebGLProgram} program
 * @return {!Array.<WebGLShader>}
 * @nosideeffects
 */
getAttachedShaders = function (program) {
	return [Or(programs)]
}

/**
 * @param {WebGLProgram} program
 * @param {string} name
 * @return {number}
 * @nosideeffects
 */
getAttribLocation = function (program, name) {
	return [Or(programs), Or(["vColor", "a_position", "color"])]
}

/**
 * @param {number} target
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
getBufferParameter = function (target, pname) {
	var target = Or(["gl.ARRAY_BUFFER", "gl.ELEMENT_ARRAY_BUFFER", "gl.COPY_READ_BUFFER", "gl.COPY_WRITE_BUFFER", "gl.TRANSFORM_FEEDBACK_BUFFER", "gl.UNIFORM_BUFFER", "gl.PIXEL_PACK_BUFFER", "gl.PIXEL_UNPACK_BUFFER"])
	var pname = Or(["gl.BUFFER_SIZE", "gl.BUFFER_USAGE", "gl.STATIC_DRAW", "gl.DYNAMIC_DRAW", "gl.STREAM_DRAW", "gl.STATIC_READ", "gl.DYNAMIC_READ", "gl.STREAM_READ", "gl.STATIC_COPY", "gl.DYNAMIC_COPY", "gl.STREAM_COPY"])
	return [target, pname]
}

/**
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
getParameter = function (pname) {
	var pname = Or(["ext.COMPRESSED_R11_EAC", "ext.COMPRESSED_RG11_EAC", "ext.COMPRESSED_RGB8_ETC2", "ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", "ext.COMPRESSED_RGBA8_ETC2_EAC", "ext.COMPRESSED_RGBA_ASTC_10x10_KHR", "ext.COMPRESSED_RGBA_ASTC_10x5_KHR", "ext.COMPRESSED_RGBA_ASTC_10x6_KHR", "ext.COMPRESSED_RGBA_ASTC_12x10_KHR", "ext.COMPRESSED_RGBA_ASTC_12x12_KHR", "ext.COMPRESSED_RGBA_ASTC_4x4_KHR", "ext.COMPRESSED_RGBA_ASTC_5x4_KHR", "ext.COMPRESSED_RGBA_ASTC_5x5_KHR", "ext.COMPRESSED_RGBA_ASTC_6x5_KHR", "ext.COMPRESSED_RGBA_ASTC_6x6_KHR", "ext.COMPRESSED_RGBA_ASTC_8x5_KHR", "ext.COMPRESSED_RGBA_ASTC_8x6_KHR", "ext.COMPRESSED_RGBA_ASTC_8x8_KHR", "ext.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL", "ext.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL", "ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", "ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", "ext.COMPRESSED_RGBA_S3TC_DXT1_EXT", "ext.COMPRESSED_RGBA_S3TC_DXT3_EXT", "ext.COMPRESSED_RGBA_S3TC_DXT5_EXT", "ext.COMPRESSED_RGB_ATC_WEBGL", "ext.COMPRESSED_RGB_ETC1_WEBGL", "ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG", "ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG", "ext.COMPRESSED_RGB_S3TC_DXT1_EXT", "ext.COMPRESSED_SIGNED_R11_EAC", "ext.COMPRESSED_SIGNED_RG11_EAC", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", "ext.COMPRESSED_SRGB8_ETC2", "ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", "ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", "ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", "ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", "ext.COMPRESSED_SRGB_S3TC_DXT1_EXT", "ext.DRAW_BUFFER0_WEBGL", "ext.DRAW_BUFFER10_WEBGL", "ext.DRAW_BUFFER11_WEBGL", "ext.DRAW_BUFFER12_WEBGL", "ext.DRAW_BUFFER13_WEBGL", "ext.DRAW_BUFFER14_WEBGL", "ext.DRAW_BUFFER15_WEBGL", "ext.DRAW_BUFFER1_WEBGL", "ext.DRAW_BUFFER2_WEBGL", "ext.DRAW_BUFFER3_WEBGL", "ext.DRAW_BUFFER4_WEBGL", "ext.DRAW_BUFFER5_WEBGL", "ext.DRAW_BUFFER6_WEBGL", "ext.DRAW_BUFFER7_WEBGL", "ext.DRAW_BUFFER8_WEBGL", "ext.DRAW_BUFFER9_WEBGL", "ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "ext.GPU_DISJOINT_EXT", "ext.MAX_COLOR_ATTACHMENTS_WEBGL", "ext.MAX_DRAW_BUFFERS_WEBGL", "ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT", "ext.TIMESTAMP_EXT", "ext.VERTEX_ARRAY_BINDING_OES", "gl.ACTIVE_TEXTURE", "gl.ALIASED_LINE_WIDTH_RANGE", "gl.ALIASED_POINT_SIZE_RANGE", "gl.ALPHA_BITS", "gl.ARRAY_BUFFER_BINDING", "gl.BLEND", "gl.BLEND_COLOR", "gl.BLEND_DST_ALPHA", "gl.BLEND_DST_RGB", "gl.BLEND_EQUATION", "gl.BLEND_EQUATION_ALPHA", "gl.BLEND_EQUATION_RGB", "gl.BLEND_SRC_ALPHA", "gl.BLEND_SRC_RGB", "gl.BLUE_BITS", "gl.COLOR_CLEAR_VALUE", "gl.COLOR_WRITEMASK", "gl.COMPRESSED_TEXTURE_FORMATS", "gl.COPY_READ_BUFFER_BINDING", "gl.COPY_WRITE_BUFFER_BINDING", "gl.CULL_FACE", "gl.CULL_FACE_MODE", "gl.CURRENT_PROGRAM", "gl.DEPTH_BITS", "gl.DEPTH_CLEAR_VALUE", "gl.DEPTH_FUNC", "gl.DEPTH_RANGE", "gl.DEPTH_TEST", "gl.DEPTH_WRITEMASK", "gl.DITHER", "gl.DRAW_BUFFERi", "gl.DRAW_FRAMEBUFFER_BINDING", "gl.ELEMENT_ARRAY_BUFFER_BINDING", "gl.FRAGMENT_SHADER_DERIVATIVE_HINT", "gl.FRAMEBUFFER_BINDING", "gl.FRONT_FACE", "gl.GENERATE_MIPMAP_HINT", "gl.GREEN_BITS", "gl.IMPLEMENTATION_COLOR_READ_FORMAT", "gl.IMPLEMENTATION_COLOR_READ_TYPE", "gl.LINE_WIDTH", "gl.MAX_3D_TEXTURE_SIZE", "gl.MAX_ARRAY_TEXTURE_LAYERS", "gl.MAX_CLIENT_WAIT_TIMEOUT_WEBGL", "gl.MAX_COLOR_ATTACHMENTS", "gl.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", "gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS", "gl.MAX_COMBINED_UNIFORM_BLOCKS", "gl.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", "gl.MAX_CUBE_MAP_TEXTURE_SIZE", "gl.MAX_DRAW_BUFFERS", "gl.MAX_ELEMENTS_INDICES", "gl.MAX_ELEMENTS_VERTICES", "gl.MAX_ELEMENT_INDEX", "gl.MAX_FRAGMENT_INPUT_COMPONENTS", "gl.MAX_FRAGMENT_UNIFORM_BLOCKS", "gl.MAX_FRAGMENT_UNIFORM_COMPONENTS", "gl.MAX_FRAGMENT_UNIFORM_VECTORS", "gl.MAX_PROGRAM_TEXEL_OFFSET", "gl.MAX_RENDERBUFFER_SIZE", "gl.MAX_SAMPLES", "gl.MAX_SERVER_WAIT_TIMEOUT", "gl.MAX_TEXTURE_IMAGE_UNITS", "gl.MAX_TEXTURE_LOD_BIAS", "gl.MAX_TEXTURE_SIZE", "gl.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", "gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", "gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", "gl.MAX_UNIFORM_BLOCK_SIZE", "gl.MAX_UNIFORM_BUFFER_BINDINGS", "gl.MAX_VARYING_COMPONENTS", "gl.MAX_VARYING_VECTORS", "gl.MAX_VERTEX_ATTRIBS", "gl.MAX_VERTEX_OUTPUT_COMPONENTS", "gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS", "gl.MAX_VERTEX_UNIFORM_BLOCKS", "gl.MAX_VERTEX_UNIFORM_COMPONENTS", "gl.MAX_VERTEX_UNIFORM_VECTORS", "gl.MAX_VIEWPORT_DIMS", "gl.MIN_PROGRAM_TEXEL_OFFSET", "gl.PACK_ALIGNMENT", "gl.PACK_ROW_LENGTH", "gl.PACK_SKIP_PIXELS", "gl.PACK_SKIP_ROWS", "gl.PIXEL_PACK_BUFFER_BINDING", "gl.PIXEL_UNPACK_BUFFER_BINDING", "gl.POLYGON_OFFSET_FACTOR", "gl.POLYGON_OFFSET_FILL", "gl.POLYGON_OFFSET_UNITS", "gl.RASTERIZER_DISCARD", "gl.READ_BUFFER", "gl.READ_FRAMEBUFFER_BINDING", "gl.RED_BITS", "gl.RENDERBUFFER_BINDING", "gl.RENDERER", "gl.SAMPLER_BINDING", "gl.SAMPLES", "gl.SAMPLE_ALPHA_TO_COVERAGE", "gl.SAMPLE_BUFFERS", "gl.SAMPLE_COVERAGE", "gl.SAMPLE_COVERAGE_INVERT", "gl.SAMPLE_COVERAGE_VALUE", "gl.SCISSOR_BOX", "gl.SCISSOR_TEST", "gl.SHADING_LANGUAGE_VERSION", "gl.STENCIL_BACK_FAIL", "gl.STENCIL_BACK_FUNC", "gl.STENCIL_BACK_PASS_DEPTH_FAIL", "gl.STENCIL_BACK_PASS_DEPTH_PASS", "gl.STENCIL_BACK_REF", "gl.STENCIL_BACK_VALUE_MASK", "gl.STENCIL_BACK_WRITEMASK", "gl.STENCIL_BITS", "gl.STENCIL_CLEAR_VALUE", "gl.STENCIL_FAIL", "gl.STENCIL_FUNC", "gl.STENCIL_PASS_DEPTH_FAIL", "gl.STENCIL_PASS_DEPTH_PASS", "gl.STENCIL_REF", "gl.STENCIL_TEST", "gl.STENCIL_VALUE_MASK", "gl.STENCIL_WRITEMASK", "gl.SUBPIXEL_BITS", "gl.TEXTURE_BINDING_2D", "gl.TEXTURE_BINDING_2D_ARRAY", "gl.TEXTURE_BINDING_3D", "gl.TEXTURE_BINDING_CUBE_MAP", "gl.TRANSFORM_FEEDBACK_ACTIVE", "gl.TRANSFORM_FEEDBACK_BINDING", "gl.TRANSFORM_FEEDBACK_BUFFER_BINDING", "gl.TRANSFORM_FEEDBACK_PAUSED", "gl.UNIFORM_BUFFER_BINDING", "gl.UNIFORM_BUFFER_OFFSET_ALIGNMENT", "gl.UNPACK_ALIGNMENT", "gl.UNPACK_COLORSPACE_CONVERSION_WEBGL", "gl.UNPACK_FLIP_Y_WEBGL", "gl.UNPACK_IMAGE_HEIGHT", "gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL", "gl.UNPACK_ROW_LENGTH", "gl.UNPACK_SKIP_IMAGES", "gl.UNPACK_SKIP_PIXELS", "gl.UNPACK_SKIP_ROWS", "gl.VENDOR", "gl.VERSION", "gl.VERTEX_ARRAY_BINDING", "gl.VIEWPORT"])
	return [pname]

}

/**
 * @return {number}
 * @nosideeffects
 */
getError = function () { return [] }

/**
 * @param {number} target
 * @param {number} attachment
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
getFramebufferAttachmentParameter = function (target, attachment, pname) {
	var target = Or(["gl.FRAMEBUFFER", "gl.DRAW_FRAMEBUFFER", "gl.READ_FRAMEBUFFER"])
	var attachment = Or(["gl.COLOR_ATTACHMENT1", "gl.COLOR_ATTACHMENT2", "gl.COLOR_ATTACHMENT3", "gl.COLOR_ATTACHMENT4", "gl.COLOR_ATTACHMENT5", "gl.COLOR_ATTACHMENT6", "gl.COLOR_ATTACHMENT7", "gl.COLOR_ATTACHMENT8", "gl.COLOR_ATTACHMENT9", "gl.COLOR_ATTACHMENT10", "gl.COLOR_ATTACHMENT11", "gl.COLOR_ATTACHMENT12", "gl.COLOR_ATTACHMENT13", "gl.COLOR_ATTACHMENT14", "gl.COLOR_ATTACHMENT15", "gl.DEPTH_ATTACHMENT", "gl.STENCIL_ATTACHMENT", "gl.DEPTH_STENCIL_ATTACHMENT", "ext.COLOR_ATTACHMENT0_WEBGL", "ext.COLOR_ATTACHMENT1_WEBGL", "ext.COLOR_ATTACHMENT2_WEBGL", "ext.COLOR_ATTACHMENT3_WEBGL", "ext.COLOR_ATTACHMENT4_WEBGL", "ext.COLOR_ATTACHMENT5_WEBGL", "ext.COLOR_ATTACHMENT6_WEBGL", "ext.COLOR_ATTACHMENT7_WEBGL", "ext.COLOR_ATTACHMENT8_WEBGL", "ext.COLOR_ATTACHMENT9_WEBGL", "ext.COLOR_ATTACHMENT10_WEBGL", "ext.COLOR_ATTACHMENT11_WEBGL", "ext.COLOR_ATTACHMENT12_WEBGL", "ext.COLOR_ATTACHMENT13_WEBGL", "ext.COLOR_ATTACHMENT14_WEBGL", "ext.COLOR_ATTACHMENT15_WEBGL"])
	var pname = Or(["gl.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", "gl.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", "gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", "gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", "ext.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT", "gl.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE", "gl.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE", "gl.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING", "gl.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE", "gl.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE", "gl.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE", "gl.FRAMEBUFFER_ATTACHMENT_RED_SIZE", "gl.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE", "gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER"])
	return [target, attachment, pname]
}

/**
 * @param {WebGLProgram} program
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
getProgramParameter = function (program, pname) {
	var pname = Or(["gl.DELETE_STATUS", "gl.LINK_STATUS", "gl.VALIDATE_STATUS", "gl.ATTACHED_SHADERS", "gl.ACTIVE_ATTRIBUTES", "gl.ACTIVE_UNIFORMS", "gl.TRANSFORM_FEEDBACK_BUFFER_MODE", "gl.INTERLEAVED_ATTRIBS", "gl.TRANSFORM_FEEDBACK_VARYINGS", "gl.ACTIVE_UNIFORM_BLOCKS"])
	return [Or(programs), pname]
}

/**
 * @param {WebGLProgram} program
 * @return {string}
 * @nosideeffects
 */
getProgramInfoLog = function (program) {
	return [Or(programs)]
}

/**
 * @param {number} target
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
getRenderbufferParameter = function (target, pname) {
	var target = "gl.RENDERBUFFER"
	var pname = Or(["gl.RENDERBUFFER_WIDTH", "gl.RENDERBUFFER_HEIGHT", "gl.RENDERBUFFER_INTERNAL_FORMAT", "gl.RGBA4", "gl.RGB565", "gl.RGB5_A1", "gl.DEPTH_COMPONENT16", "gl.STENCIL_INDEX8", "gl.RENDERBUFFER_GREEN_SIZE", "gl.RENDERBUFFER_BLUE_SIZE", "gl.RENDERBUFFER_RED_SIZE", "gl.RENDERBUFFER_ALPHA_SIZE", "gl.RENDERBUFFER_DEPTH_SIZE", "gl.RENDERBUFFER_STENCIL_SIZE", "gl.RENDERBUFFER_SAMPLES"])
	return [target, pname]
}

/**
 * @param {WebGLShader} shader
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
getShaderParameter = function (shader, pname) {
	var shader = Or([shaders])
	var pname = Or(["gl.DELETE_STATUS", "gl.COMPILE_STATUS", "gl.SHADER_TYPE"])
	return [shader, pname]
}

/**
 * @param {number} shadertype
 * @param {number} precisiontype
 * @return {WebGLShaderPrecisionFormat}
 * @nosideeffects
 */
getShaderPrecisionFormat = function (shadertype, precisiontype) {
	return [Or("FRAGMENT_SHADER", "VERTEX_SHADER"), Or(["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"])]
}

/**
 * @param {WebGLShader} shader
 * @return {string}
 * @nosideeffects
 */
getShaderInfoLog = function (shader) {
	return [Or([shaders])]
}

/**
 * @param {WebGLShader} shader
 * @return {string}
 * @nosideeffects
 */
getShaderSource = function (shader) {
	return [Or([shaders])]
}

/**
 * @param {number} target
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
getTexParameter = function (target, pname) {
	var pname = Or(["ext.TEXTURE_MAX_ANISOTROPY_EXT", "gl.TEXTURE_BASE_LEVEL", "gl.TEXTURE_COMPARE_FUNC", "gl.TEXTURE_COMPARE_MODE", "gl.TEXTURE_IMMUTABLE_FORMAT", "gl.TEXTURE_IMMUTABLE_LEVELS", "gl.TEXTURE_MAG_FILTER", "gl.TEXTURE_MAX_LEVEL", "gl.TEXTURE_MAX_LOD", "gl.TEXTURE_MIN_FILTER", "gl.TEXTURE_MIN_LOD", "gl.TEXTURE_WRAP_R", "gl.TEXTURE_WRAP_S", "gl.TEXTURE_WRAP_T"])
	return [Or(["gl.TEXTURE_2D", "gl.TEXTURE_CUBE_MAP", "gl.TEXTURE_3D", "gl.TEXTURE_2D_ARRAY"]), pname]
}

/**
 * @param {WebGLProgram} program
 * @param {WebGLUniformLocation} location
 * @return {*}
 * @nosideeffects
 */
getUniform = function (program, location) {
	return [Or(programs), Or(locations)]
}

/**
 * @param {WebGLProgram} program
 * @param {string} name
 * @return {WebGLUniformLocation}
 * @nosideeffects
 */
getUniformLocation = function (program, name) {
	return [Or(programs), Or(["vColor", "a_position", "color"])]
}

/**
 * @param {number} index
 * @param {number} pname
 * @return {*}
 * @nosideeffects
 */
getVertexAttrib = function (index, pname) {
	var pname = Or(["ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE", "gl.BYTE", "gl.CURRENT_VERTEX_ATTRIB", "gl.FIXED", "gl.FLOAT", "gl.SHORT", "gl.UNSIGNED_BYTE", "gl.UNSIGNED_SHORT", "gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", "gl.VERTEX_ATTRIB_ARRAY_DIVISOR", "gl.VERTEX_ATTRIB_ARRAY_ENABLED", "gl.VERTEX_ATTRIB_ARRAY_INTEGER", "gl.VERTEX_ATTRIB_ARRAY_NORMALIZED", "gl.VERTEX_ATTRIB_ARRAY_SIZE", "gl.VERTEX_ATTRIB_ARRAY_STRIDE", "gl.VERTEX_ATTRIB_ARRAY_TYPE"])
	return [number(), pname]
}

/**
 * @param {number} index
 * @param {number} pname
 * @return {number}
 * @nosideeffects
 */
getVertexAttribOffset = function (index, pname) {
	return [number(), "gl.VERTEX_ATTRIB_ARRAY_POINTER"]
}

/**
 * @param {number} target
 * @param {number} mode
 */
hint = function (target, mode) {
	var target = Or(["gl.GENERATE_MIPMAP_HINT", "ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES"])
	var mode = Or(["gl.FASTEST", "gl.NICEST", "gl.DONT_CARE"])
	return [target, mode]
}

/**
 * @param {WebGLObject} buffer
 * @return {boolean}
 * @nosideeffects
 */
isBuffer = function (buffer) {
	return [Or(buffers)]
}

/**
 * @param {number} cap
 * @return {boolean}
 * @nosideeffects
 */
isEnabled = function (cap) {
	return [Or(["gl.BLEND", "gl.CULL_FACE", "gl.DEPTH_TEST", "gl.DITHER", "gl.POLYGON_OFFSET_FILL", "gl.SAMPLE_ALPHA_TO_COVERAGE", "gl.SAMPLE_COVERAGE", "gl.SCISSOR_TEST", "gl.STENCIL_TEST", "gl.RASTERIZER_DISCARD"])]
}

/**
 * @param {WebGLObject} framebuffer
 * @return {boolean}
 * @nosideeffects
 */
isFramebuffer = function (framebuffer) {
	return [Or(framebuffers)]
}

/**
 * @param {WebGLObject} program
 * @return {boolean}
 * @nosideeffects
 */
isProgram = function (program) {
	return [Or(programs)]
}

/**
 * @param {WebGLObject} renderbuffer
 * @return {boolean}
 * @nosideeffects
 */
isRenderbuffer = function (renderbuffer) {
	return [Or(renderbuffers)]
}

/**
 * @param {WebGLObject} shader
 * @return {boolean}
 * @nosideeffects
 */
isShader = function (shader) {
	return [Or(shaders)]
}

/**
 * @param {WebGLObject} texture
 * @return {boolean}
 * @nosideeffects
 */
isTexture = function (texture) {
	return [Or(textures)]
}

/**
 * @param {number} width
 */
lineWidth = function (width) {
	return [number()]
}

/**
 * @param {WebGLProgram} program
 */
linkProgram = function (program) {
	return [Or(programs)]
}

/**
 * @param {number} pname
 * @param {number} param
 */
pixelStorei = function (pname, param) {
	var pname = Or(["gl.PACK_ALIGNMENT", "gl.PACK_ROW_LENGTH", "gl.PACK_SKIP_PIXELS", "gl.PACK_SKIP_ROWS", "gl.UNPACK_ALIGNMENT", "gl.UNPACK_COLORSPACE_CONVERSION_WEBGL", "gl.UNPACK_FLIP_Y_WEBGL", "gl.UNPACK_IMAGE_HEIGHT", "gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL", "gl.UNPACK_ROW_LENGTH", "gl.UNPACK_SKIP_IMAGES", "gl.UNPACK_SKIP_PIXELS", "gl.UNPACK_SKIP_ROWS"])
	return [pname, number()]
}

/**
 * @param {number} factor
 * @param {number} units
 */
polygonOffset = function (factor, units) {
	return [number(), number()]

}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number} format
 * @param {number} type
 * @param {ArrayBufferView} pixels
 */
readPixels = function (x, y, width, height, format, type, pixels) {
	var format = Or(["gl.ALPHA", "gl.RGB", "gl.RGBA"])
	var type = Or(["gl.UNSIGNED_BYTE", "gl.UNSIGNED_SHORT_5_6_5", "gl.UNSIGNED_SHORT_4_4_4_4", "gl.UNSIGNED_SHORT_5_5_5_1", "gl.FLOAT"])

	return [number(), number(), number(), number(), format, type, Or(array_buffers)]
}

/**
 * @param {number} target
 * @param {number} internalformat
 * @param {number} width
 * @param {number} height
 */
renderbufferStorage = function (target, internalformat, width, height) {
	var internalFormat = Or(["ext.RGB32F_EXT", "ext.RGBA32F_EXT", "ext.SRGB8_ALPHA8_EXT", "gl.DEPTH24_STENCIL8", "gl.DEPTH32F_STENCIL8", "gl.DEPTH_COMPONENT16", "gl.DEPTH_COMPONENT24", "gl.DEPTH_COMPONENT32F", "gl.DEPTH_STENCIL", "gl.R11F_G11F_B10F", "gl.R16F", "gl.R16I", "gl.R16UI", "gl.R32F", "gl.R32I", "gl.R32UI", "gl.R8", "gl.R8I", "gl.R8UI", "gl.RG16F", "gl.RG16I", "gl.RG16UI", "gl.RG32F", "gl.RG32I", "gl.RG32UI", "gl.RG8", "gl.RG8I", "gl.RG8UI", "gl.RGB10_A2", "gl.RGB10_A2UI", "gl.RGB565", "gl.RGB5_A1", "gl.RGB8", "gl.RGBA16F", "gl.RGBA16I", "gl.RGBA16UI", "gl.RGBA32F", "gl.RGBA32I", "gl.RGBA32UI", "gl.RGBA4", "gl.RGBA8", "gl.RGBA8I", "gl.RGBA8UI", "gl.SRGB8_ALPHA8", "gl.STENCIL_INDEX8"])
	return ["gl.RENDERBUFFER", internalFormat, number(), number()]
}

/**
 * @param {number} coverage
 * @param {boolean} invert
 */
sampleCoverage = function (coverage, invert) {
	return [floatRange(0, 1), Or(["true", "false"])]
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 */
scissor = function (x, y, width, height) {
	return [number(), number(), number(), number()]
}

/**
 * @param {WebGLShader} shader
 * @param {string} source
 */
// shaderSource = function(shader, source){

// }

/**
 * @param {number} func
 * @param {number} ref
 * @param {number} mask
 */
stencilFunc = function (func, ref, mask) {
	var func = Or(["gl.ALWAYS", "gl.EQUAL", "gl.GEQUAL", "gl.GREATER", "gl.LEQUAL", "gl.LESS", "gl.NEVER", "gl.NOTEQUAL"])
	return [func, number(), number()]
}

/**
 * @param {number} face
 * @param {number} func
 * @param {number} ref
 * @param {number} mask
 */
stencilFuncSeparate = function (face, func, ref, mask) {
	var face = Or(["gl.FRONT", "gl.BACK", "gl.FRONT_AND_BACK"])
	var func = Or(["gl.ALWAYS", "gl.EQUAL", "gl.GEQUAL", "gl.GREATER", "gl.LEQUAL", "gl.LESS", "gl.NEVER", "gl.NOTEQUAL"])
	return [face, func, number(), number()]
}

/**
 * @param {number} mask
 */
stencilMask = function (mask) {
	return [number()]
}

/**
 * @param {number} face
 * @param {number} mask
 */
stencilMaskSeparate = function (face, mask) {
	var face = Or(["gl.FRONT", "gl.BACK", "gl.FRONT_AND_BACK"])
	return [face, number()]
}

/**
 * @param {number} fail
 * @param {number} zfail
 * @param {number} zpass
 */
stencilOp = function (fail, zfail, zpass) {
	var fail = Or(["gl.DECR", "gl.DECR_WRAP", "gl.INCR", "gl.INCR_WRAP", "gl.INVERT", "gl.KEEP", "gl.REPLACE", "gl.ZERO"])
	var zfail = Or(["gl.DECR", "gl.DECR_WRAP", "gl.INCR", "gl.INCR_WRAP", "gl.INVERT", "gl.KEEP", "gl.REPLACE", "gl.ZERO"])
	var zpass = Or(["gl.DECR", "gl.DECR_WRAP", "gl.INCR", "gl.INCR_WRAP", "gl.INVERT", "gl.KEEP", "gl.REPLACE", "gl.ZERO"])
	return [fail, zfail, zpass]
}

/**
 * @param {number} face
 * @param {number} fail
 * @param {number} zfail
 * @param {number} zpass
 */
stencilOpSeparate = function (face, fail, zfail, zpass) {
	var face = Or(["gl.FRONT", "gl.BACK", "gl.FRONT_AND_BACK"])
	var fail = Or(["gl.DECR", "gl.DECR_WRAP", "gl.INCR", "gl.INCR_WRAP", "gl.INVERT", "gl.KEEP", "gl.REPLACE", "gl.ZERO"])
	var zfail = Or(["gl.DECR", "gl.DECR_WRAP", "gl.INCR", "gl.INCR_WRAP", "gl.INVERT", "gl.KEEP", "gl.REPLACE", "gl.ZERO"])
	var zpass = Or(["gl.DECR", "gl.DECR_WRAP", "gl.INCR", "gl.INCR_WRAP", "gl.INVERT", "gl.KEEP", "gl.REPLACE", "gl.ZERO"])
	return [face, fail, zfail, zpass]

}

/**
 * @param {number} target
 * @param {number} level
 * @param {number} internalformat
 * @param {number} format or width
 * @param {number} type or height
 * @param {ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|
 *     number} img or border
 * @param {number=} opt_format
 * @param {number=} opt_type
 * @param {ArrayBufferView=} opt_pixels
 */
// texImage2D = function(
//     target, level, internalformat, format, type, img, opt_format, opt_type,
//     opt_pixels){
// }

/**
 * @param {number} target
 * @param {number} pname
 * @param {number} param
 */
texParameterf = function (target, pname, param) {
	var target = Or(["gl.TEXTURE_2D", "gl.TEXTURE_CUBE_MAP", "gl.TEXTURE_3D", "gl.TEXTURE_2D_ARRAY"])
	var pname = Or(["ext.TEXTURE_MAX_ANISOTROPY_EXT", "gl.TEXTURE_BASE_LEVEL", "gl.TEXTURE_COMPARE_FUNC", "gl.TEXTURE_COMPARE_MODE", "gl.TEXTURE_MAG_FILTER", "gl.TEXTURE_MAX_LEVEL", "gl.TEXTURE_MAX_LOD", "gl.TEXTURE_MIN_FILTER", "gl.TEXTURE_MIN_LOD", "gl.TEXTURE_WRAP_R", "gl.TEXTURE_WRAP_S", "gl.TEXTURE_WRAP_T"])
	return [target, pname, floatValue()]
}

/**
 * @param {number} target
 * @param {number} pname
 * @param {number} param
 */
texParameteri = function (target, pname, param) {
	var target = Or(["gl.TEXTURE_2D", "gl.TEXTURE_CUBE_MAP", "gl.TEXTURE_3D", "gl.TEXTURE_2D_ARRAY"])
	var pname = Or(["ext.TEXTURE_MAX_ANISOTROPY_EXT", "gl.TEXTURE_BASE_LEVEL", "gl.TEXTURE_COMPARE_FUNC", "gl.TEXTURE_COMPARE_MODE", "gl.TEXTURE_MAG_FILTER", "gl.TEXTURE_MAX_LEVEL", "gl.TEXTURE_MAX_LOD", "gl.TEXTURE_MIN_FILTER", "gl.TEXTURE_MIN_LOD", "gl.TEXTURE_WRAP_R", "gl.TEXTURE_WRAP_S", "gl.TEXTURE_WRAP_T"])
	return [target, pname, number()]
}

/**
 * @param {number} target
 * @param {number} level
 * @param {number} xoffset
 * @param {number} yoffset
 * @param {number} format or width
 * @param {number} type or height
 * @param {ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|
 *     number} data or format
 * @param {number=} opt_type
 * @param {ArrayBufferView=} opt_pixels
 */
// texSubImage2D = function(
//     target, level, xoffset, yoffset, format, type, data, opt_type,
//     opt_pixels){
// }

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value
 */
uniform1f = function (location, value) {
	return [Or(locations), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {Float32Array|Array.<number>} value
 */
uniform1fv = function (location, value) {
	return [Or(locations), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value
 */
uniform1i = function (location, value) {
	return [Or(locations), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {Int32Array|Array.<number>} value
 */
uniform1iv = function (location, value) {
	return [Or(locations), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value1
 * @param {number} value2
 */
uniform2f = function (location, value1, value2) {
	return [Or(locations), number(), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {Float32Array|Array.<number>} value
 */
uniform2fv = function (location, value) {
	return [Or(locations), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value1
 * @param {number} value2
 */
uniform2i = function (location, value1, value2) {
	return [Or(locations), number(), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {Int32Array|Array.<number>} value
 */
uniform2iv = function (location, value) {
	return [Or(locations), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value1
 * @param {number} value2
 * @param {number} value3
 */
uniform3f = function (location, value1, value2, value3) {
	return [Or(locations), number(), number(), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {Float32Array|Array.<number>} value
 */
uniform3fv = function (location, value) {
	return [Or(locations), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value1
 * @param {number} value2
 * @param {number} value3
 */
uniform3i = function (location, value1, value2, value3) {
	return [Or(locations), number(), number(), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {Int32Array|Array.<number>} value
 */
uniform3iv = function (location, value) {
	return [Or(locations), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value1
 * @param {number} value2
 * @param {number} value3
 * @param {number} value4
 */
uniform4f = function (location, value1, value2, value3, value4) {
	return [Or(locations), number(), number(), number(), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {Float32Array|Array.<number>} value
 */
uniform4fv = function (location, value) {
	return [Or(locations), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {number} value1
 * @param {number} value2
 * @param {number} value3
 * @param {number} value4
 */
uniform4i = function (location, value1, value2, value3, value4) {
	return [Or(locations), number(), number(), number(), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {Int32Array|Array.<number>} value
 */
uniform4iv = function (location, value) {
	return [Or(locations), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {boolean} transpose
 * @param {Float32Array|Array.<number>} data
 */
uniformMatrix2fv = function (location, transpose, data) {
	return [Or(locations), Or(["true", "false"]), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {boolean} transpose
 * @param {Float32Array|Array.<number>} data
 */
uniformMatrix3fv = function (location, transpose, data) {
	return [Or(locations), Or(["true", "false"]), number()]
}

/**
 * @param {WebGLUniformLocation} location
 * @param {boolean} transpose
 * @param {Float32Array|Array.<number>} data
 */
uniformMatrix4fv = function (location, transpose, data) {
	return [Or(locations), Or(["true", "false"]), number()]
}

/**
 * @param {WebGLProgram} program
 */
useProgram = function (program) {
	return [Or(programs)]
}

/**
 * @param {WebGLProgram} program
 */
validateProgram = function (program) {
	return [Or(programs)]
}

/**
 * @param {number} indx
 * @param {number} x
 */
vertexAttrib1f = function (indx, x) {
	return [number(), number()]
}

/**
 * @param {number} indx
 * @param {Float32Array|Array.<number>} values
 */
vertexAttrib1fv = function (indx, values) {
	return [number(), number()]
}

/**
 * @param {number} indx
 * @param {number} x
 * @param {number} y
 */
vertexAttrib2f = function (indx, x, y) {
	return [number(), number(), number()]
}

/**
 * @param {number} indx
 * @param {Float32Array|Array.<number>} values
 */
vertexAttrib2fv = function (indx, values) {
	return [number(), number()]
}

/**
 * @param {number} indx
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
vertexAttrib3f = function (indx, x, y, z) {
	return [number(), number(), number(), number()]
}

/**
 * @param {number} indx
 * @param {Float32Array|Array.<number>} values
 */
vertexAttrib3fv = function (indx, values) {
	return [number(), number()]
}

/**
 * @param {number} indx
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 */
vertexAttrib4f = function (indx, x, y, z, w) {
	return [number(), number(), number(), number()]
}

/**
 * @param {number} indx
 * @param {Float32Array|Array.<number>} values
 */
vertexAttrib4fv = function (indx, values) {
	return [number(), number()]
}

/**
 * @param {number} indx
 * @param {number} size
 * @param {number} type
 * @param {boolean} normalized
 * @param {number} stride
 * @param {number} offset
 */
vertexAttribPointer = function (indx, size, type, normalized, stride, offset) {

	var type = Or(["gl.BYTE", "gl.FLOAT", "gl.HALF_FLOAT", "gl.SHORT", "gl.UNSIGNED_BYTE", "gl.UNSIGNED_SHORT"])

	return [number(), number(), type, Or(["true", "false"]), rint(256), number()]
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 */
viewport = function (x, y, width, height) {
	return [number(), number(), number(), number()]
}
