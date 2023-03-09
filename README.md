# webgl-fuzzer
My oooollllllllddd webgl fuzzer from 1990BC 🧐

## Sample

```js
> node fuzzer.js

<script type="vertex" id="vshader">VSHADER_HERE
</script>

<script type="fragment" id="fshader">FSHADER_HERE
</script>

<canvas id="canvas"  style="height:100%;width: 100%" ></canvas>

<script type="text/javascript">

    var id = "canvas";
    var gl = document.getElementById(id).getContext("webgl");
    var ext = gl.getExtension('EXT_sRGB');
    var vshader = document.getElementById("vshader").text;
    var fshader = document.getElementById("fshader").text;
    var program = gl.createProgram();

  function resize(canvas) {
    // Lookup the size the browser is displaying the canvas.
    var displayWidth  = canvas.clientWidth;
    var displayHeight = canvas.clientHeight;

    // Check if the canvas is not the same size.
    if (canvas.width  !== displayWidth ||
        canvas.height !== displayHeight) {

      // Make the canvas the same size
      canvas.width  = displayWidth;
      canvas.height = displayHeight;
    }
  }

  function createShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
      return shader;
    }

    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
  }

  function createProgram(gl, vertexShader, fragmentShader) {
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
      return program;
    }

    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
  }

  var vshader = document.getElementById("vshader").text ;
  var fshader = document.getElementById("fshader").text ;
  var vertexShader   = createShader(gl, gl.VERTEX_SHADER, vshader);
  var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fshader);

  var program = createProgram(gl, vertexShader, fragmentShader);
  var positionAttributeLocation = gl.getAttribLocation(program, "a_position");

  var positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  var positions = [-1,1,1,0,-1,0,-1,0,-1,1,0,-1,-1,0,0,0,-1,1,0,0,0,0,0,0,0,1,1,0,0,-1,0,-1,0,1,0,0,0,0,1,1,-1,-1,-1,1,0,0,0,0,0]
  var array_buffer =  new Float32Array(positions);
  gl.bufferData(gl.ARRAY_BUFFER, array_buffer, gl.STATIC_DRAW);

  // var vertexArray = gl.createVertexArray();
  // gl.bindVertexArray(vertexArray);
  // gl.enableVertexAttribArray(positionAttributeLocation);
  // var size = 2;          // 2 components per iteration
  // var type = gl.FLOAT;   // the data is 32bit floats
  // var normalize = false; // don't normalize the data
  // var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
  // var offset = 0;        // start at the beginning of the buffer
  // gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

  resize(gl.canvas);

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Clear the canvas
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.useProgram(program);
// fuzz from here

var JjqmaDxz = new Float64Array();
gl.bufferData(gl.ARRAY_BUFFER, JjqmaDxz, gl.STATIC_DRAW);var eptzMPOR = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, eptzMPOR);
var vGTMgunz = gl.createFramebuffer();
var IHIUAfST = gl.getAttribLocation(program, "a_position");
var OPxcRIIP = gl.createProgram();
var bLLpcGHy = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, bLLpcGHy);

try{gl.cullFace(gl.FRONT)}catch(e){}
 try{gl.getAttribLocation(program,color)}catch(e){}
 try{gl.frontFace(gl.CW,gl.CCW)}catch(e){}
 try{gl.isRenderbuffer()}catch(e){}
 try{gl.blendFuncSeparate(gl.CONSTANT_ALPHA,gl.CONSTANT_ALPHA,gl.ONE_MINUS_DST_COLOR,gl.ONE)}catch(e){}
 try{gl.bindBuffer(gl.COPY_READ_BUFFER,vGTMgunz)}catch(e){}
 try{gl.attachShader(256,0)}catch(e){}
 try{gl.createRenderbuffer()}catch(e){}
 try{gl.vertexAttribPointer(4294967295,4294967294,gl.BYTE,true,174,0.4)}catch(e){}
 try{gl.scissor(32768,0.8,1,0.32)}catch(e){}
 try{gl.blendColor(0.889967062654849,-0.7123554331312512,15589.963011060627916470488502,0)}catch(e){}
 try{gl.getRenderbufferParameter(gl.RENDERBUFFER,gl.RENDERBUFFER_BLUE_SIZE)}catch(e){}
 try{gl.scissor(2147483647,4294967295,0.64,0.8)}catch(e){}
 try{gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_WRAP_T,32768)}catch(e){}
 try{gl.getAttribLocation(program,a_position)}catch(e){}
 try{gl.uniformMatrix3fv(IHIUAfST,false,8192)}catch(e){}
 try{gl.uniform2iv(positionAttributeLocation,2)}catch(e){}
 try{gl.blendFuncSeparate(gl.ONE_MINUS_CONSTANT_ALPHA,gl.ONE_MINUS_SRC_COLOR,gl.CONSTANT_COLOR,gl.ONE_MINUS_SRC_COLOR)}catch(e){}
 try{gl.clearColor(0.2011377830195784,0,0.31154269840958526,0.18470429668082122)}catch(e){}
 try{gl.scissor(4294967295,0.16,0.32,16)}catch(e){}
 try{gl.copyTexImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,2147483646,gl.ALPHA,2,512,2147483648,2147483647,0.16)}catch(e){}
 try{gl.generateMipmap(gl.TEXTURE_2D)}catch(e){}
 try{gl.clearDepth(-2.802797293533849)}catch(e){}
 try{gl.clearColor(280121.60808333155,851749.5801717904,0.8341082466110596,0.02193120738318255)}catch(e){}
 try{gl.cullFace(gl.FRONT_AND_BACK)}catch(e){}
 try{gl.getShaderSource(vshader,fshader)}catch(e){}
 try{gl.createBuffer()}catch(e){}
 try{gl.createRenderbuffer()}catch(e){}
 try{gl.isBuffer(vGTMgunz)}catch(e){}
 try{gl.vertexAttribPointer(4,32,gl.UNSIGNED_SHORT,true,75,0.64)}catch(e){}
 try{gl.copyTexImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X,0.32,gl.RGBA,16384,0.4,2147483647,2147483647,0.2)}catch(e){}
 try{gl.flush()}catch(e){}
 try{gl.isProgram(program)}catch(e){}
 try{gl.isEnabled(gl.CULL_FACE)}catch(e){}
 try{gl.lineWidth(0.4)}catch(e){}
 try{gl.flush()}catch(e){}
 try{gl.getActiveUniform(program,255)}catch(e){}
 try{gl.generateMipmap(gl.TEXTURE_2D)}catch(e){}
 try{gl.getShaderSource(vshader,fshader)}catch(e){}
 try{gl.attachShader(4,256)}catch(e){}
 try{gl.bindRenderbuffer(gl.RENDERBUFFER,)}catch(e){}
 try{gl.clear(gl.COLOR_BUFFER_BIT)}catch(e){}
 try{gl.uniform2i(IHIUAfST,0.16,2)}catch(e){}
 try{gl.shaderSource(0.16,4294967295)}catch(e){}
 try{gl.bufferData(2147483647,2147483646,0.4)}catch(e){}
 try{gl.getShaderInfoLog(vshader,fshader)}catch(e){}
 try{gl.scissor(128,2147483647,4294967294,0.64)}catch(e){}
 try{gl.getContextAttributes()}catch(e){}
 try{gl.attachShader(2147483648,8192)}catch(e){}
 try{gl.frontFace(gl.CW,gl.CCW)}catch(e){}
 try{gl.uniform2i(positionAttributeLocation,0.16,4294967294)}catch(e){}
 try{gl.getActiveUniform(program,4294967295)}catch(e){}
 try{gl.uniform1i(IHIUAfST,32768)}catch(e){}
 try{gl.stencilOpSeparate(gl.BACK,gl.KEEP,gl.INCR,gl.DECR)}catch(e){}
 try{gl.uniformMatrix4fv(positionAttributeLocation,true,4)}catch(e){}
 try{gl.isProgram(program)}catch(e){}
 try{gl.bufferData(0.8,2147483646,4294967295)}catch(e){}
 try{gl.viewport(128,2147483648,0.8,0.32)}catch(e){}
 try{gl.uniformMatrix4fv(positionAttributeLocation,false,4294967295)}catch(e){}
 try{gl.uniform2i(positionAttributeLocation,0.4,2147483647)}catch(e){}
 try{gl.scissor(64,65535,0.16,32)}catch(e){}
 try{gl.isBuffer(eptzMPOR)}catch(e){}
 try{gl.uniformMatrix3fv(IHIUAfST,false,0.16)}catch(e){}
 try{gl.uniformMatrix3fv(IHIUAfST,false,32768)}catch(e){}
 try{gl.vertexAttribPointer(512,1,gl.SHORT,true,221,4294967295)}catch(e){}
 try{gl.vertexAttrib2fv(256,4)}catch(e){}
 try{gl.getParameter(ext.DRAW_BUFFER14_WEBGL)}catch(e){}
 try{gl.uniformMatrix2fv(positionAttributeLocation,true,0)}catch(e){}
 try{gl.getFramebufferAttachmentParameter(gl.FRAMEBUFFER,ext.COLOR_ATTACHMENT2_WEBGL,gl.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)}catch(e){}
 try{gl.flush()}catch(e){}
 try{gl.attachShader(0.32,4294967295)}catch(e){}
 try{gl.attachShader(255,2147483647)}catch(e){}
 try{gl.getContextAttributes()}catch(e){}
 try{gl.uniform3i(positionAttributeLocation,4294967294,2147483648,0.4)}catch(e){}
 try{gl.generateMipmap(gl.TEXTURE_2D)}catch(e){}
 try{gl.uniform2i(IHIUAfST,4294967294,4)}catch(e){}
 try{gl.createTexture()}catch(e){}
 try{gl.blendFunc(gl.ZERO,gl.ONE_MINUS_SRC_ALPHA)}catch(e){}
 try{gl.uniform1f(IHIUAfST,2147483647)}catch(e){}
 try{gl.getProgramInfoLog(program)}catch(e){}
 try{gl.compileShader(2147483646)}catch(e){}
 try{gl.blendFunc(gl.ONE_MINUS_DST_ALPHA,gl.ZERO)}catch(e){}
 try{gl.clearDepth(-0.12389386313963113)}catch(e){}
 try{gl.attachShader(65534,4294967294)}catch(e){}
 try{gl.validateProgram(program)}catch(e){}
 try{gl.getFramebufferAttachmentParameter(gl.DRAW_FRAMEBUFFER,ext.COLOR_ATTACHMENT14_WEBGL,gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL)}catch(e){}
 try{gl.detachShader(OPxcRIIP,vshader)}catch(e){}
 try{gl.scissor(65534,32,32768,0.64)}catch(e){}
 try{gl.copyTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X,32,gl.RGBA,64,4291051535,32767,4,255)}catch(e){}
 try{gl.deleteFramebuffer()}catch(e){}
 try{gl.depthMask(false)}catch(e){}
 try{gl.stencilFuncSeparate(gl.BACK,gl.ALWAYS,0,0.16)}catch(e){}
 try{gl.texParameteri(gl.TEXTURE_2D_ARRAY,gl.TEXTURE_BASE_LEVEL,128)}catch(e){}
 try{gl.compileShader(512)}catch(e){}
 try{gl.copyTexImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X,0.16,gl.RGB,0,32768,0.16,255,64)}catch(e){}
 try{gl.generateMipmap(gl.TEXTURE_2D_ARRAY)}catch(e){}
 try{gl.attachShader(0.16,128)}catch(e){}
 try{gl.uniformMatrix3fv(IHIUAfST,true,512)}catch(e){}
 try{gl.blendEquation(gl.FUNC_ADD)}catch(e){}
 try{gl.getShaderInfoLog(vshader,fshader)}catch(e){}
 try{gl.clearColor(89104.15022052098689859190549,0.18925139245122846,0.1502931572726771,0.47348674635753607)}catch(e){}
 try{gl.getAttribLocation(OPxcRIIP,color)}catch(e){}
 try{gl.bufferData(256,32768,512)}catch(e){}
 try{gl.enableVertexAttribArray(16384)}catch(e){}
 try{gl.stencilOpSeparate(gl.BACK,gl.ZERO,gl.INCR,gl.DECR)}catch(e){}
 try{gl.isProgram(program)}catch(e){}
 try{gl.bindRenderbuffer(gl.RENDERBUFFER,)}catch(e){}
 try{gl.getParameter(ext.MAX_DRAW_BUFFERS_WEBGL)}catch(e){}
 try{gl.vertexAttribPointer(0.16,2147483646,gl.UNSIGNED_BYTE,false,171,32)}catch(e){}
 try{gl.renderbufferStorage(gl.RENDERBUFFER,gl.RGBA32I,32,0.64)}catch(e){}
 try{gl.deleteTexture(bLLpcGHy)}catch(e){}
 try{gl.uniform1f(IHIUAfST,8192)}catch(e){}
 try{gl.shaderSource(16384,512)}catch(e){}
 try{gl.copyTexImage2D(gl.TEXTURE_2D,32766,gl.ALPHA,4291051535,0,0,2147483646,0.32)}catch(e){}
 try{gl.getRenderbufferParameter(gl.RENDERBUFFER,gl.RENDERBUFFER_HEIGHT)}catch(e){}
 try{gl.uniformMatrix3fv(positionAttributeLocation,true,0.16)}catch(e){}
 try{gl.getContextAttributes()}catch(e){}
 try{gl.isEnabled(gl.RASTERIZER_DISCARD)}catch(e){}
 try{gl.scissor(0.32,2,2147483648,4294967294)}catch(e){}
 try{gl.frontFace(gl.CW,gl.CCW)}catch(e){}
 try{gl.uniform3fv(positionAttributeLocation,4)}catch(e){}
 try{gl.compileShader(128)}catch(e){}
 try{gl.copyTexImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X,0.32,gl.ALPHA,0.32,1,1,4294967294,32767)}catch(e){}
 try{gl.uniformMatrix2fv(positionAttributeLocation,true,0)}catch(e){}
 try{gl.getShaderSource(vshader,fshader)}catch(e){}
 try{gl.compileShader(256)}catch(e){}
 try{gl.getContextAttributes()}catch(e){}
 try{gl.clearDepth(-0.4985668598370523)}catch(e){}
 try{gl.deleteTexture(bLLpcGHy)}catch(e){}
 try{gl.depthMask(true)}catch(e){}
 try{gl.bufferData(0.64,2147483647,32767)}catch(e){}
 try{gl.uniform3fv(positionAttributeLocation,128)}catch(e){}
 try{gl.cullFace(gl.BACK)}catch(e){}
 try{gl.vertexAttribPointer(0.64,2147483646,gl.BYTE,true,184,16)}catch(e){}
 try{gl.uniform3i(IHIUAfST,0.64,2,32)}catch(e){}
 try{gl.isRenderbuffer()}catch(e){}
 try{gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAX_LOD,32)}catch(e){}
 try{gl.compileShader(0.8)}catch(e){}
 try{gl.generateMipmap(gl.TEXTURE_2D_ARRAY)}catch(e){}
 try{gl.uniform3i(IHIUAfST,0.4,32,2147483648)}catch(e){}
 try{gl.uniform2iv(IHIUAfST,255)}catch(e){}
 try{gl.depthMask(false)}catch(e){}
 try{gl.getFramebufferAttachmentParameter(gl.DRAW_FRAMEBUFFER,gl.COLOR_ATTACHMENT5,gl.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)}catch(e){}
 try{gl.createTexture()}catch(e){}
 try{gl.vertexAttrib2fv(32766,0.4)}catch(e){}
 try{gl.createTexture()}catch(e){}
 try{gl.blendFuncSeparate(gl.ONE_MINUS_DST_COLOR,gl.ONE_MINUS_DST_ALPHA,gl.CONSTANT_COLOR,gl.SRC_ALPHA_SATURATE)}catch(e){}
 try{gl.compileShader(4294967295)}catch(e){}
 try{gl.blendFunc(gl.ONE_MINUS_DST_COLOR,gl.SRC_COLOR)}catch(e){}
 try{gl.getProgramInfoLog(OPxcRIIP)}catch(e){}
  var primitiveType = gl.TRIANGLES;
  var offset = 0;
  var count = 3;
  gl.drawArrays(primitiveType, offset, count);
</script>

```