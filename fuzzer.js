require("./libs/randoms.js")
// webgl operations
require("./libs/webglRenderingContextOperations.js");
// webgl2 operations
// require("./libs/webgl2RenderingContextOperations.js");

var fs = require('fs');
var webidl = require("./libs/webidl2.js");

// var webgl2file = fs.readFileSync("./lib/webgl2.idl").toString()
var webgl1file = fs.readFileSync("./libs/webgl.idl").toString()

checkIfSequence = function (arg) {

    if (arg["idlType"]["sequence"])
        return true
    return false
}


fidentifier = function () {
    var N = 8;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < N; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

}

bind_variable_to_gl = function (type, iden) {
    return `gl.bind${type}(${iden});`
}


// array_buffers
create_array_buffers = function () {
    var iden = fidentifier()
    array_buffers.push(iden);
    var array_buffer_types = ["Int8Array()", "Uint8Array()", "Uint8ClampedArray()", "Int16Array()", "Uint16Array()", "Int32Array()", "Uint32Array()", "Float32Array()", "Float64Array()"]
    return `var ${iden} = new ${Or(array_buffer_types)};\ngl.bufferData(gl.ARRAY_BUFFER, ${iden}, gl.STATIC_DRAW);`
}

// bindings = [];
create_bindings = function () {
    var iden = fidentifier();
    bindings.push(iden);

    var targets = ["gl.TRANSFORM_FEEDBACK_BUFFER_BINDING",//: Returns a WebGLBuffer.
        "gl.TRANSFORM_FEEDBACK_BUFFER_SIZE",//: Returns a GLsizeiptr.
        "gl.TRANSFORM_FEEDBACK_BUFFER_START",//: Returns a GLintptr.
        "gl.UNIFORM_BUFFER_BINDING",//: Returns a WebGLBuffer.
        "gl.UNIFORM_BUFFER_SIZE",//: Returns a GLsizeiptr.
        "gl.UNIFORM_BUFFER_START"//: Returns a GLintptr.
    ]

    var targets2 = ["gl.COPY_READ_BUFFER_BINDING",
        "gl.COPY_WRITE_BUFFER_BINDING",
        "gl.DRAW_BUFFERi",
        "gl.DRAW_FRAMEBUFFER_BINDING",
        "gl.FRAGMENT_SHADER_DERIVATIVE_HINT",
        "gl.MAX_3D_TEXTURE_SIZE",
        "gl.MAX_ARRAY_TEXTURE_LAYERS",
        "gl.MAX_CLIENT_WAIT_TIMEOUT_WEBGL",
        "gl.MAX_COLOR_ATTACHMENTS",
        "gl.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS",
        "gl.MAX_COMBINED_UNIFORM_BLOCKS",
        "gl.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS",
        "gl.MAX_DRAW_BUFFERS",
        "gl.MAX_ELEMENT_INDEX",
        "gl.MAX_ELEMENTS_INDICES",
        "gl.MAX_ELEMENTS_VERTICES",
        "gl.MAX_FRAGMENT_INPUT_COMPONENTS",
        "gl.MAX_FRAGMENT_UNIFORM_BLOCKS",
        "gl.MAX_FRAGMENT_UNIFORM_COMPONENTS",
        "gl.MAX_PROGRAM_TEXEL_OFFSET",
        "gl.MAX_SAMPLES",
        "gl.MAX_SERVER_WAIT_TIMEOUT",
        "gl.MAX_TEXTURE_LOD_BIAS",
        "gl.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS",
        "gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS",
        "gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS",
        "gl.MAX_UNIFORM_BLOCK_SIZE",
        "gl.MAX_UNIFORM_BUFFER_BINDINGS",
        "gl.MAX_VARYING_COMPONENTS",
        "gl.MAX_VERTEX_OUTPUT_COMPONENTS",
        "gl.MAX_VERTEX_UNIFORM_BLOCKS",
        "gl.MAX_VERTEX_UNIFORM_COMPONENTS",
        "gl.MIN_PROGRAM_TEXEL_OFFSET",
        "gl.PACK_ROW_LENGTH",
        "gl.PACK_SKIP_PIXELS",
        "gl.PACK_SKIP_ROWS",
        "gl.PIXEL_PACK_BUFFER_BINDING",
        "gl.PIXEL_UNPACK_BUFFER_BINDING",
        "gl.RASTERIZER_DISCARD",
        "gl.READ_BUFFER",
        "gl.READ_FRAMEBUFFER_BINDING",
        "gl.SAMPLE_ALPHA_TO_COVERAGE",
        "gl.SAMPLE_COVERAGE",
        "gl.SAMPLER_BINDING",
        "gl.TEXTURE_BINDING_2D_ARRAY",
        "gl.TEXTURE_BINDING_3D",
        "gl.TRANSFORM_FEEDBACK_ACTIVE",
        "gl.TRANSFORM_FEEDBACK_BINDING",
        "gl.TRANSFORM_FEEDBACK_BUFFER_BINDING",
        "gl.TRANSFORM_FEEDBACK_PAUSED",
        "gl.UNIFORM_BUFFER_BINDING",
        "gl.UNIFORM_BUFFER_OFFSET_ALIGNMENT",
        "gl.UNPACK_IMAGE_HEIGHT",
        "gl.UNPACK_ROW_LENGTH",
        "gl.UNPACK_SKIP_IMAGES",
        "gl.UNPACK_SKIP_PIXELS",
        "gl.UNPACK_SKIP_ROWS",
        "gl.VERTEX_ARRAY_BINDING"]

    if (rint(2))
        return `var ${iden} = gl.getIndexedParameter(${Or(targets)}, ${rint(3)});\n`
    else
        return `var ${iden} = gl.getParameter(${Or(targets2)});\n`

}

// buffers = [];
create_buffers = function () {
    var iden = fidentifier()
    buffers.push(iden)
    return `var ${iden} = gl.createBuffer();\ngl.bindBuffer(gl.ARRAY_BUFFER, ${iden});\n`
}

// framebuffers = [];
create_frame_buffers = function () {
    var iden = fidentifier()
    buffers.push(iden)
    return `var ${iden} = gl.createFramebuffer();\n`
}

// renderbuffers = [];
create_render_buffers = function () {
    var iden = fidentifier();
    renderbuffers.push(iden);
    return `var ${iden} = gl.createRenderbuffer();\ngl.bindRenderbuffer(gl.RENDERBUFFER, ${iden});`
}

// locations = [];
create_locations = function () {
    var iden = fidentifier();
    locations.push(iden);
    return `var ${iden} = gl.getAttribLocation(program, "a_position");\n`
}

// programs = ['program'];
create_programs = function () {
    var iden = fidentifier()
    programs.push(iden)
    return `var ${iden} = gl.createProgram();\n`
}

// queries = [];
create_queries = function () {
    var iden = fidentifier()
    queries.push(iden);
    return `var ${iden} = gl.createQuery();\n`
}

// samplers = [];
create_samplers = function () {
    var iden = fidentifier()
    samplers.push(iden);
    return `var ${iden} = gl.createSampler();\ngl.bindSampler(0, ${iden});\n`
}

// syncs = [];
create_syncs = function () {
    var iden = fidentifier()
    syncs.push(iden)
    return `var ${iden} = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);\n`
}

// textures = []
create_textures = function () {
    var iden = fidentifier()
    textures.push(iden)
    return `var ${iden} = gl.createTexture();\ngl.bindTexture(gl.TEXTURE_2D, ${iden});\n`
}

// transform_feedbacks = [];
create_transform_feedbacks = function () {
    var iden = fidentifier()
    transform_feedbacks.push(iden)
    return `var ${iden} = gl.createTransformFeedback();\ngl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK,${iden})`
}

// initialise
init = function () {
    var ret = `

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

  var positions = [${webPositions(rint(60))}]
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

`
    return ret

}

// fuzz based on webgl
generateCall = function (name, argsList, idlTypes) {
    var poc = "("
    for (var j = 0; j < argsList.length; j++) {

        arg = argsList[j]

        var sequence = checkIfSequence(arg)

        if (sequence) {
            // use random number 
            // for(var i=0;i<rint(10);i++){
            type = arg["idlType"]["idlType"]
            if (j == argsList.length - 1) {
                // poc+=")"
                // console.log(arg["name"])
                poc += [number()]
            } else {
                poc += number() + ","
            }
            // }
        } else {
            if (j == argsList.length - 1) {
                // poc+=")"
                // console.log(arg["name"])
                poc += number()
            } else
                poc += number() + ","
        }
    }
    return poc + ")"
}

fuzzwebgl2 = function () {

    var webgl2 = []

    // var tree = webidl.parse(webglfile)
    idlTypes = {}
    constants = {}

    var count = 0
    var tree = webidl.parse(webgl1file)
    for (var i in tree) {
        if (tree[i]['name'] == 'WebGLRenderingContextBase')
            WebGLRenderingContextBase = tree[i]
    }
    members = WebGLRenderingContextBase["members"]

    operations = []
    for (i in members) {
        op = members[i]
        if (op['type'] == 'operation')
            operations.push(op)
    }
    while (count < fuzz_count) {

        mem = ra(operations)

        var name = mem["name"];
        var args = mem["arguments"]
        var retType = mem["idlType"]

        if (checkIfSequence(mem["idlType"])) {
            sequence = true
            retType = mem["idlType"]["idlType"]["idlType"]
        } else {
            retType = mem["idlType"]["idlType"]
        }
        for (var k = 0; k < rint(5); k++) {


            try {
                method_args = eval(`${name}()`)
                try {
                    method_args = method_args.join()
                    method_poc = `${name}(${method_args})`
                } catch (e) {
                }
            } catch (e) {
                method_poc = undefined
            }

            if (method_poc)
                webgl2.push("try{gl." + method_poc + "}catch(e){}\n")
            else
                webgl2.push("try{gl." + name + generateCall(name, args, idlTypes) + "}catch(e){}\n")
        }

        tree = raObject(tree)
        count += 1
    }

    return webgl2.shuffle().join(" ")

}

generate = function () {
    var poc = init();
    poc += (create_array_buffers())
    // poc+=(create_bindings());
    poc += (create_buffers());
    poc += (create_frame_buffers())
    // poc+=(create_render_buffers())
    poc += (create_locations());
    poc += (create_programs());
    // poc+=(create_queries());
    // poc+=(create_samplers());
    // poc+=(create_syncs());
    poc += (create_textures());
    // poc+=(create_transform_feedbacks());
    poc += "\n"
    poc += fuzzwebgl2()
    poc += `  var primitiveType = gl.TRIANGLES;
  var offset = 0;
  var count = 3;
  gl.drawArrays(primitiveType, offset, count);`

    return poc
}

fuzz_count = 100

shaders = ["vshader", "fshader"]
array_buffers = ["array_buffer"];
buffers = ["positionBuffer"];
framebuffers = [];
renderbuffers = [];
locations = ["positionAttributeLocation"];
programs = ['program'];
vertex_arrays = ['vertexArray'];
bindings = [];
queries = [];
samplers = [];
syncs = [];
textures = []
transform_feedbacks = [];

// for(var i=0;i<10;i++){
// console.log(create_array_buffers())
// console.log(create_bindings());
// console.log(create_buffers());
// console.log(create_locations());
// console.log(create_programs());
// console.log(create_queries());
// console.log(create_samplers());
// console.log(create_syncs());
// console.log(create_textures());
// console.log(create_transform_feedbacks());
// }

// console.log(array_buffers)
// console.log(buffers)
// console.log(locations)
// console.log(programs)
// console.log(vertex_arrays)
// console.log(bindings)
// console.log(queries)
// console.log(samplers)
// console.log(syncs)
// console.log(textures)
// console.log(transform_feedbacks)
// console.log(generate())
// var tree = webidl.parse(webgl1file)
// generate()
const poc = `
<script type="vertex" id="vshader">VSHADER_HERE
</script>

<script type="fragment" id="fshader">FSHADER_HERE
</script>

<canvas id="canvas"  style="height:100%;width: 100%" ></canvas>

<script type="text/javascript">
${generate()}
</script>
`

console.log(poc)