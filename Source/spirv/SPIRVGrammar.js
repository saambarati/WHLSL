// This is https://github.com/KhronosGroup/SPIRV-Headers/blob/master/include/spirv/1.2/spirv.core.grammar.json
// converted into an ES Module.

export const SPIRVGrammar = {
  "copyright" : [
    "Copyright (c) 2014-2016 The Khronos Group Inc.",
    "",
    "Permission is hereby granted, free of charge, to any person obtaining a copy",
    "of this software and/or associated documentation files (the \"Materials\"),",
    "to deal in the Materials without restriction, including without limitation",
    "the rights to use, copy, modify, merge, publish, distribute, sublicense,",
    "and/or sell copies of the Materials, and to permit persons to whom the",
    "Materials are furnished to do so, subject to the following conditions:",
    "",
    "The above copyright notice and this permission notice shall be included in",
    "all copies or substantial portions of the Materials.",
    "",
    "MODIFICATIONS TO THIS FILE MAY MEAN IT NO LONGER ACCURATELY REFLECTS KHRONOS",
    "STANDARDS. THE UNMODIFIED, NORMATIVE VERSIONS OF KHRONOS SPECIFICATIONS AND",
    "HEADER INFORMATION ARE LOCATED AT https://www.khronos.org/registry/ ",
    "",
    "THE MATERIALS ARE PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS",
    "OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,",
    "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL",
    "THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER",
    "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING",
    "FROM,OUT OF OR IN CONNECTION WITH THE MATERIALS OR THE USE OR OTHER DEALINGS",
    "IN THE MATERIALS."
  ],
  "magic_number" : "0x07230203",
  "major_version" : 1,
  "minor_version" : 2,
  "revision" : 2,
  "instructions" : [
    {
      "opname" : "OpNop",
      "opcode" : 0
    },
    {
      "opname" : "OpUndef",
      "opcode" : 1,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" }
      ]
    },
    {
      "opname" : "OpSourceContinued",
      "opcode" : 2,
      "operands" : [
        { "kind" : "LiteralString", "name" : "'Continued Source'" }
      ]
    },
    {
      "opname" : "OpSource",
      "opcode" : 3,
      "operands" : [
        { "kind" : "SourceLanguage" },
        { "kind" : "LiteralInteger",                     "name" : "'Version'" },
        { "kind" : "IdRef",          "quantifier" : "?", "name" : "'File'" },
        { "kind" : "LiteralString",  "quantifier" : "?", "name" : "'Source'" }
      ]
    },
    {
      "opname" : "OpSourceExtension",
      "opcode" : 4,
      "operands" : [
        { "kind" : "LiteralString", "name" : "'Extension'" }
      ]
    },
    {
      "opname" : "OpName",
      "opcode" : 5,
      "operands" : [
        { "kind" : "IdRef",         "name" : "'Target'" },
        { "kind" : "LiteralString", "name" : "'Name'" }
      ]
    },
    {
      "opname" : "OpMemberName",
      "opcode" : 6,
      "operands" : [
        { "kind" : "IdRef",          "name" : "'Type'" },
        { "kind" : "LiteralInteger", "name" : "'Member'" },
        { "kind" : "LiteralString",  "name" : "'Name'" }
      ]
    },
    {
      "opname" : "OpString",
      "opcode" : 7,
      "operands" : [
        { "kind" : "IdResult" },
        { "kind" : "LiteralString", "name" : "'String'" }
      ]
    },
    {
      "opname" : "OpLine",
      "opcode" : 8,
      "operands" : [
        { "kind" : "IdRef",          "name" : "'File'" },
        { "kind" : "LiteralInteger", "name" : "'Line'" },
        { "kind" : "LiteralInteger", "name" : "'Column'" }
      ]
    },
    {
      "opname" : "OpExtension",
      "opcode" : 10,
      "operands" : [
        { "kind" : "LiteralString", "name" : "'Name'" }
      ]
    },
    {
      "opname" : "OpExtInstImport",
      "opcode" : 11,
      "operands" : [
        { "kind" : "IdResult" },
        { "kind" : "LiteralString", "name" : "'Name'" }
      ]
    },
    {
      "opname" : "OpExtInst",
      "opcode" : 12,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                                     "name" : "'Set'" },
        { "kind" : "LiteralExtInstInteger",                     "name" : "'Instruction'" },
        { "kind" : "IdRef",                 "quantifier" : "*", "name" : "'Operand 1', +\n'Operand 2', +\n..." }
      ]
    },
    {
      "opname" : "OpMemoryModel",
      "opcode" : 14,
      "operands" : [
        { "kind" : "AddressingModel" },
        { "kind" : "MemoryModel" }
      ]
    },
    {
      "opname" : "OpEntryPoint",
      "opcode" : 15,
      "operands" : [
        { "kind" : "ExecutionModel" },
        { "kind" : "IdRef",                              "name" : "'Entry Point'" },
        { "kind" : "LiteralString",                      "name" : "'Name'" },
        { "kind" : "IdRef",          "quantifier" : "*", "name" : "'Interface'" }
      ]
    },
    {
      "opname" : "OpExecutionMode",
      "opcode" : 16,
      "operands" : [
        { "kind" : "IdRef",         "name" : "'Entry Point'" },
        { "kind" : "ExecutionMode", "name" : "'Mode'" }
      ]
    },
    {
      "opname" : "OpCapability",
      "opcode" : 17,
      "operands" : [
        { "kind" : "Capability", "name" : "'Capability'" }
      ]
    },
    {
      "opname" : "OpTypeVoid",
      "opcode" : 19,
      "operands" : [
        { "kind" : "IdResult" }
      ]
    },
    {
      "opname" : "OpTypeBool",
      "opcode" : 20,
      "operands" : [
        { "kind" : "IdResult" }
      ]
    },
    {
      "opname" : "OpTypeInt",
      "opcode" : 21,
      "operands" : [
        { "kind" : "IdResult" },
        { "kind" : "LiteralInteger", "name" : "'Width'" },
        { "kind" : "LiteralInteger", "name" : "'Signedness'" }
      ]
    },
    {
      "opname" : "OpTypeFloat",
      "opcode" : 22,
      "operands" : [
        { "kind" : "IdResult" },
        { "kind" : "LiteralInteger", "name" : "'Width'" }
      ]
    },
    {
      "opname" : "OpTypeVector",
      "opcode" : 23,
      "operands" : [
        { "kind" : "IdResult" },
        { "kind" : "IdRef",          "name" : "'Component Type'" },
        { "kind" : "LiteralInteger", "name" : "'Component Count'" }
      ]
    },
    {
      "opname" : "OpTypeMatrix",
      "opcode" : 24,
      "operands" : [
        { "kind" : "IdResult" },
        { "kind" : "IdRef",          "name" : "'Column Type'" },
        { "kind" : "LiteralInteger", "name" : "'Column Count'" }
      ],
      "capabilities" : [ "Matrix" ]
    },
    {
      "opname" : "OpTypeImage",
      "opcode" : 25,
      "operands" : [
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                               "name" : "'Sampled Type'" },
        { "kind" : "Dim" },
        { "kind" : "LiteralInteger",                      "name" : "'Depth'" },
        { "kind" : "LiteralInteger",                      "name" : "'Arrayed'" },
        { "kind" : "LiteralInteger",                      "name" : "'MS'" },
        { "kind" : "LiteralInteger",                      "name" : "'Sampled'" },
        { "kind" : "ImageFormat" },
        { "kind" : "AccessQualifier", "quantifier" : "?" }
      ]
    },
    {
      "opname" : "OpTypeSampler",
      "opcode" : 26,
      "operands" : [
        { "kind" : "IdResult" }
      ]
    },
    {
      "opname" : "OpTypeSampledImage",
      "opcode" : 27,
      "operands" : [
        { "kind" : "IdResult" },
        { "kind" : "IdRef",    "name" : "'Image Type'" }
      ]
    },
    {
      "opname" : "OpTypeArray",
      "opcode" : 28,
      "operands" : [
        { "kind" : "IdResult" },
        { "kind" : "IdRef",    "name" : "'Element Type'" },
        { "kind" : "IdRef",    "name" : "'Length'" }
      ]
    },
    {
      "opname" : "OpTypeRuntimeArray",
      "opcode" : 29,
      "operands" : [
        { "kind" : "IdResult" },
        { "kind" : "IdRef",    "name" : "'Element Type'" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpTypeStruct",
      "opcode" : 30,
      "operands" : [
        { "kind" : "IdResult" },
        { "kind" : "IdRef",    "quantifier" : "*", "name" : "'Member 0 type', +\n'member 1 type', +\n..." }
      ]
    },
    {
      "opname" : "OpTypeOpaque",
      "opcode" : 31,
      "operands" : [
        { "kind" : "IdResult" },
        { "kind" : "LiteralString", "name" : "The name of the opaque type." }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpTypePointer",
      "opcode" : 32,
      "operands" : [
        { "kind" : "IdResult" },
        { "kind" : "StorageClass" },
        { "kind" : "IdRef",        "name" : "'Type'" }
      ]
    },
    {
      "opname" : "OpTypeFunction",
      "opcode" : 33,
      "operands" : [
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                        "name" : "'Return Type'" },
        { "kind" : "IdRef",    "quantifier" : "*", "name" : "'Parameter 0 Type', +\n'Parameter 1 Type', +\n..." }
      ]
    },
    {
      "opname" : "OpTypeEvent",
      "opcode" : 34,
      "operands" : [
        { "kind" : "IdResult" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpTypeDeviceEvent",
      "opcode" : 35,
      "operands" : [
        { "kind" : "IdResult" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpTypeReserveId",
      "opcode" : 36,
      "operands" : [
        { "kind" : "IdResult" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpTypeQueue",
      "opcode" : 37,
      "operands" : [
        { "kind" : "IdResult" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpTypePipe",
      "opcode" : 38,
      "operands" : [
        { "kind" : "IdResult" },
        { "kind" : "AccessQualifier", "name" : "'Qualifier'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpTypeForwardPointer",
      "opcode" : 39,
      "operands" : [
        { "kind" : "IdRef",        "name" : "'Pointer Type'" },
        { "kind" : "StorageClass" }
      ],
      "capabilities" : [ "Addresses" ]
    },
    {
      "opname" : "OpConstantTrue",
      "opcode" : 41,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" }
      ]
    },
    {
      "opname" : "OpConstantFalse",
      "opcode" : 42,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" }
      ]
    },
    {
      "opname" : "OpConstant",
      "opcode" : 43,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "LiteralContextDependentNumber", "name" : "'Value'" }
      ]
    },
    {
      "opname" : "OpConstantComposite",
      "opcode" : 44,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "quantifier" : "*", "name" : "'Constituents'" }
      ]
    },
    {
      "opname" : "OpConstantSampler",
      "opcode" : 45,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "SamplerAddressingMode" },
        { "kind" : "LiteralInteger",        "name" : "'Param'" },
        { "kind" : "SamplerFilterMode" }
      ],
      "capabilities" : [ "LiteralSampler" ]
    },
    {
      "opname" : "OpConstantNull",
      "opcode" : 46,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" }
      ]
    },
    {
      "opname" : "OpSpecConstantTrue",
      "opcode" : 48,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" }
      ]
    },
    {
      "opname" : "OpSpecConstantFalse",
      "opcode" : 49,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" }
      ]
    },
    {
      "opname" : "OpSpecConstant",
      "opcode" : 50,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "LiteralContextDependentNumber", "name" : "'Value'" }
      ]
    },
    {
      "opname" : "OpSpecConstantComposite",
      "opcode" : 51,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "quantifier" : "*", "name" : "'Constituents'" }
      ]
    },
    {
      "opname" : "OpSpecConstantOp",
      "opcode" : 52,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "LiteralSpecConstantOpInteger", "name" : "'Opcode'" }
      ]
    },
    {
      "opname" : "OpFunction",
      "opcode" : 54,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "FunctionControl" },
        { "kind" : "IdRef",           "name" : "'Function Type'" }
      ]
    },
    {
      "opname" : "OpFunctionParameter",
      "opcode" : 55,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" }
      ]
    },
    {
      "opname" : "OpFunctionEnd",
      "opcode" : 56
    },
    {
      "opname" : "OpFunctionCall",
      "opcode" : 57,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                            "name" : "'Function'" },
        { "kind" : "IdRef",        "quantifier" : "*", "name" : "'Argument 0', +\n'Argument 1', +\n..." }
      ]
    },
    {
      "opname" : "OpVariable",
      "opcode" : 59,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "StorageClass" },
        { "kind" : "IdRef",        "quantifier" : "?", "name" : "'Initializer'" }
      ]
    },
    {
      "opname" : "OpImageTexelPointer",
      "opcode" : 60,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Image'" },
        { "kind" : "IdRef",        "name" : "'Coordinate'" },
        { "kind" : "IdRef",        "name" : "'Sample'" }
      ]
    },
    {
      "opname" : "OpLoad",
      "opcode" : 61,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                            "name" : "'Pointer'" },
        { "kind" : "MemoryAccess", "quantifier" : "?" }
      ]
    },
    {
      "opname" : "OpStore",
      "opcode" : 62,
      "operands" : [
        { "kind" : "IdRef",                            "name" : "'Pointer'" },
        { "kind" : "IdRef",                            "name" : "'Object'" },
        { "kind" : "MemoryAccess", "quantifier" : "?" }
      ]
    },
    {
      "opname" : "OpCopyMemory",
      "opcode" : 63,
      "operands" : [
        { "kind" : "IdRef",                            "name" : "'Target'" },
        { "kind" : "IdRef",                            "name" : "'Source'" },
        { "kind" : "MemoryAccess", "quantifier" : "?" }
      ]
    },
    {
      "opname" : "OpCopyMemorySized",
      "opcode" : 64,
      "operands" : [
        { "kind" : "IdRef",                            "name" : "'Target'" },
        { "kind" : "IdRef",                            "name" : "'Source'" },
        { "kind" : "IdRef",                            "name" : "'Size'" },
        { "kind" : "MemoryAccess", "quantifier" : "?" }
      ],
      "capabilities" : [ "Addresses" ]
    },
    {
      "opname" : "OpAccessChain",
      "opcode" : 65,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                            "name" : "'Base'" },
        { "kind" : "IdRef",        "quantifier" : "*", "name" : "'Indexes'" }
      ]
    },
    {
      "opname" : "OpInBoundsAccessChain",
      "opcode" : 66,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                            "name" : "'Base'" },
        { "kind" : "IdRef",        "quantifier" : "*", "name" : "'Indexes'" }
      ]
    },
    {
      "opname" : "OpPtrAccessChain",
      "opcode" : 67,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                            "name" : "'Base'" },
        { "kind" : "IdRef",                            "name" : "'Element'" },
        { "kind" : "IdRef",        "quantifier" : "*", "name" : "'Indexes'" }
      ],
      "capabilities" : [
        "Addresses",
        "VariablePointers",
        "VariablePointersStorageBuffer"
      ]
    },
    {
      "opname" : "OpArrayLength",
      "opcode" : 68,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",          "name" : "'Structure'" },
        { "kind" : "LiteralInteger", "name" : "'Array member'" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpGenericPtrMemSemantics",
      "opcode" : 69,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Pointer'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpInBoundsPtrAccessChain",
      "opcode" : 70,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                            "name" : "'Base'" },
        { "kind" : "IdRef",                            "name" : "'Element'" },
        { "kind" : "IdRef",        "quantifier" : "*", "name" : "'Indexes'" }
      ],
      "capabilities" : [ "Addresses" ]
    },
    {
      "opname" : "OpDecorate",
      "opcode" : 71,
      "operands" : [
        { "kind" : "IdRef",      "name" : "'Target'" },
        { "kind" : "Decoration" }
      ]
    },
    {
      "opname" : "OpMemberDecorate",
      "opcode" : 72,
      "operands" : [
        { "kind" : "IdRef",          "name" : "'Structure Type'" },
        { "kind" : "LiteralInteger", "name" : "'Member'" },
        { "kind" : "Decoration" }
      ]
    },
    {
      "opname" : "OpDecorationGroup",
      "opcode" : 73,
      "operands" : [
        { "kind" : "IdResult" }
      ]
    },
    {
      "opname" : "OpGroupDecorate",
      "opcode" : 74,
      "operands" : [
        { "kind" : "IdRef",                     "name" : "'Decoration Group'" },
        { "kind" : "IdRef", "quantifier" : "*", "name" : "'Targets'" }
      ]
    },
    {
      "opname" : "OpGroupMemberDecorate",
      "opcode" : 75,
      "operands" : [
        { "kind" : "IdRef",                                       "name" : "'Decoration Group'" },
        { "kind" : "PairIdRefLiteralInteger", "quantifier" : "*", "name" : "'Targets'" }
      ]
    },
    {
      "opname" : "OpVectorExtractDynamic",
      "opcode" : 77,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Vector'" },
        { "kind" : "IdRef",        "name" : "'Index'" }
      ]
    },
    {
      "opname" : "OpVectorInsertDynamic",
      "opcode" : 78,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Vector'" },
        { "kind" : "IdRef",        "name" : "'Component'" },
        { "kind" : "IdRef",        "name" : "'Index'" }
      ]
    },
    {
      "opname" : "OpVectorShuffle",
      "opcode" : 79,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                              "name" : "'Vector 1'" },
        { "kind" : "IdRef",                              "name" : "'Vector 2'" },
        { "kind" : "LiteralInteger", "quantifier" : "*", "name" : "'Components'" }
      ]
    },
    {
      "opname" : "OpCompositeConstruct",
      "opcode" : 80,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "quantifier" : "*", "name" : "'Constituents'" }
      ]
    },
    {
      "opname" : "OpCompositeExtract",
      "opcode" : 81,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                              "name" : "'Composite'" },
        { "kind" : "LiteralInteger", "quantifier" : "*", "name" : "'Indexes'" }
      ]
    },
    {
      "opname" : "OpCompositeInsert",
      "opcode" : 82,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                              "name" : "'Object'" },
        { "kind" : "IdRef",                              "name" : "'Composite'" },
        { "kind" : "LiteralInteger", "quantifier" : "*", "name" : "'Indexes'" }
      ]
    },
    {
      "opname" : "OpCopyObject",
      "opcode" : 83,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand'" }
      ]
    },
    {
      "opname" : "OpTranspose",
      "opcode" : 84,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Matrix'" }
      ],
      "capabilities" : [ "Matrix" ]
    },
    {
      "opname" : "OpSampledImage",
      "opcode" : 86,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Image'" },
        { "kind" : "IdRef",        "name" : "'Sampler'" }
      ]
    },
    {
      "opname" : "OpImageSampleImplicitLod",
      "opcode" : 87,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Sampled Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpImageSampleExplicitLod",
      "opcode" : 88,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",         "name" : "'Sampled Image'" },
        { "kind" : "IdRef",         "name" : "'Coordinate'" },
        { "kind" : "ImageOperands" }
      ]
    },
    {
      "opname" : "OpImageSampleDrefImplicitLod",
      "opcode" : 89,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Sampled Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "IdRef",                             "name" : "'D~ref~'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpImageSampleDrefExplicitLod",
      "opcode" : 90,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",         "name" : "'Sampled Image'" },
        { "kind" : "IdRef",         "name" : "'Coordinate'" },
        { "kind" : "IdRef",         "name" : "'D~ref~'" },
        { "kind" : "ImageOperands" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpImageSampleProjImplicitLod",
      "opcode" : 91,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Sampled Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpImageSampleProjExplicitLod",
      "opcode" : 92,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",         "name" : "'Sampled Image'" },
        { "kind" : "IdRef",         "name" : "'Coordinate'" },
        { "kind" : "ImageOperands" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpImageSampleProjDrefImplicitLod",
      "opcode" : 93,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Sampled Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "IdRef",                             "name" : "'D~ref~'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpImageSampleProjDrefExplicitLod",
      "opcode" : 94,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",         "name" : "'Sampled Image'" },
        { "kind" : "IdRef",         "name" : "'Coordinate'" },
        { "kind" : "IdRef",         "name" : "'D~ref~'" },
        { "kind" : "ImageOperands" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpImageFetch",
      "opcode" : 95,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ]
    },
    {
      "opname" : "OpImageGather",
      "opcode" : 96,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Sampled Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "IdRef",                             "name" : "'Component'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpImageDrefGather",
      "opcode" : 97,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Sampled Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "IdRef",                             "name" : "'D~ref~'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpImageRead",
      "opcode" : 98,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ]
    },
    {
      "opname" : "OpImageWrite",
      "opcode" : 99,
      "operands" : [
        { "kind" : "IdRef",                             "name" : "'Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "IdRef",                             "name" : "'Texel'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ]
    },
    {
      "opname" : "OpImage",
      "opcode" : 100,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Sampled Image'" }
      ]
    },
    {
      "opname" : "OpImageQueryFormat",
      "opcode" : 101,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Image'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpImageQueryOrder",
      "opcode" : 102,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Image'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpImageQuerySizeLod",
      "opcode" : 103,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Image'" },
        { "kind" : "IdRef",        "name" : "'Level of Detail'" }
      ],
      "capabilities" : [ "Kernel", "ImageQuery" ]
    },
    {
      "opname" : "OpImageQuerySize",
      "opcode" : 104,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Image'" }
      ],
      "capabilities" : [ "Kernel", "ImageQuery" ]
    },
    {
      "opname" : "OpImageQueryLod",
      "opcode" : 105,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Sampled Image'" },
        { "kind" : "IdRef",        "name" : "'Coordinate'" }
      ],
      "capabilities" : [ "ImageQuery" ]
    },
    {
      "opname" : "OpImageQueryLevels",
      "opcode" : 106,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Image'" }
      ],
      "capabilities" : [ "Kernel", "ImageQuery" ]
    },
    {
      "opname" : "OpImageQuerySamples",
      "opcode" : 107,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Image'" }
      ],
      "capabilities" : [ "Kernel", "ImageQuery" ]
    },
    {
      "opname" : "OpConvertFToU",
      "opcode" : 109,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Float Value'" }
      ]
    },
    {
      "opname" : "OpConvertFToS",
      "opcode" : 110,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Float Value'" }
      ]
    },
    {
      "opname" : "OpConvertSToF",
      "opcode" : 111,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Signed Value'" }
      ]
    },
    {
      "opname" : "OpConvertUToF",
      "opcode" : 112,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Unsigned Value'" }
      ]
    },
    {
      "opname" : "OpUConvert",
      "opcode" : 113,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Unsigned Value'" }
      ]
    },
    {
      "opname" : "OpSConvert",
      "opcode" : 114,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Signed Value'" }
      ]
    },
    {
      "opname" : "OpFConvert",
      "opcode" : 115,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Float Value'" }
      ]
    },
    {
      "opname" : "OpQuantizeToF16",
      "opcode" : 116,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Value'" }
      ]
    },
    {
      "opname" : "OpConvertPtrToU",
      "opcode" : 117,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Pointer'" }
      ],
      "capabilities" : [ "Addresses" ]
    },
    {
      "opname" : "OpSatConvertSToU",
      "opcode" : 118,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Signed Value'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpSatConvertUToS",
      "opcode" : 119,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Unsigned Value'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpConvertUToPtr",
      "opcode" : 120,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Integer Value'" }
      ],
      "capabilities" : [ "Addresses" ]
    },
    {
      "opname" : "OpPtrCastToGeneric",
      "opcode" : 121,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Pointer'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpGenericCastToPtr",
      "opcode" : 122,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Pointer'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpGenericCastToPtrExplicit",
      "opcode" : 123,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Pointer'" },
        { "kind" : "StorageClass", "name" : "'Storage'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpBitcast",
      "opcode" : 124,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand'" }
      ]
    },
    {
      "opname" : "OpSNegate",
      "opcode" : 126,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand'" }
      ]
    },
    {
      "opname" : "OpFNegate",
      "opcode" : 127,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand'" }
      ]
    },
    {
      "opname" : "OpIAdd",
      "opcode" : 128,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFAdd",
      "opcode" : 129,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpISub",
      "opcode" : 130,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFSub",
      "opcode" : 131,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpIMul",
      "opcode" : 132,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFMul",
      "opcode" : 133,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpUDiv",
      "opcode" : 134,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpSDiv",
      "opcode" : 135,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFDiv",
      "opcode" : 136,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpUMod",
      "opcode" : 137,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpSRem",
      "opcode" : 138,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpSMod",
      "opcode" : 139,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFRem",
      "opcode" : 140,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFMod",
      "opcode" : 141,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpVectorTimesScalar",
      "opcode" : 142,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Vector'" },
        { "kind" : "IdRef",        "name" : "'Scalar'" }
      ]
    },
    {
      "opname" : "OpMatrixTimesScalar",
      "opcode" : 143,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Matrix'" },
        { "kind" : "IdRef",        "name" : "'Scalar'" }
      ],
      "capabilities" : [ "Matrix" ]
    },
    {
      "opname" : "OpVectorTimesMatrix",
      "opcode" : 144,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Vector'" },
        { "kind" : "IdRef",        "name" : "'Matrix'" }
      ],
      "capabilities" : [ "Matrix" ]
    },
    {
      "opname" : "OpMatrixTimesVector",
      "opcode" : 145,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Matrix'" },
        { "kind" : "IdRef",        "name" : "'Vector'" }
      ],
      "capabilities" : [ "Matrix" ]
    },
    {
      "opname" : "OpMatrixTimesMatrix",
      "opcode" : 146,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'LeftMatrix'" },
        { "kind" : "IdRef",        "name" : "'RightMatrix'" }
      ],
      "capabilities" : [ "Matrix" ]
    },
    {
      "opname" : "OpOuterProduct",
      "opcode" : 147,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Vector 1'" },
        { "kind" : "IdRef",        "name" : "'Vector 2'" }
      ],
      "capabilities" : [ "Matrix" ]
    },
    {
      "opname" : "OpDot",
      "opcode" : 148,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Vector 1'" },
        { "kind" : "IdRef",        "name" : "'Vector 2'" }
      ]
    },
    {
      "opname" : "OpIAddCarry",
      "opcode" : 149,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpISubBorrow",
      "opcode" : 150,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpUMulExtended",
      "opcode" : 151,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpSMulExtended",
      "opcode" : 152,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpAny",
      "opcode" : 154,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Vector'" }
      ]
    },
    {
      "opname" : "OpAll",
      "opcode" : 155,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Vector'" }
      ]
    },
    {
      "opname" : "OpIsNan",
      "opcode" : 156,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'x'" }
      ]
    },
    {
      "opname" : "OpIsInf",
      "opcode" : 157,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'x'" }
      ]
    },
    {
      "opname" : "OpIsFinite",
      "opcode" : 158,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'x'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpIsNormal",
      "opcode" : 159,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'x'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpSignBitSet",
      "opcode" : 160,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'x'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpLessOrGreater",
      "opcode" : 161,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'x'" },
        { "kind" : "IdRef",        "name" : "'y'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpOrdered",
      "opcode" : 162,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'x'" },
        { "kind" : "IdRef",        "name" : "'y'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpUnordered",
      "opcode" : 163,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'x'" },
        { "kind" : "IdRef",        "name" : "'y'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpLogicalEqual",
      "opcode" : 164,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpLogicalNotEqual",
      "opcode" : 165,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpLogicalOr",
      "opcode" : 166,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpLogicalAnd",
      "opcode" : 167,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpLogicalNot",
      "opcode" : 168,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand'" }
      ]
    },
    {
      "opname" : "OpSelect",
      "opcode" : 169,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Condition'" },
        { "kind" : "IdRef",        "name" : "'Object 1'" },
        { "kind" : "IdRef",        "name" : "'Object 2'" }
      ]
    },
    {
      "opname" : "OpIEqual",
      "opcode" : 170,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpINotEqual",
      "opcode" : 171,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpUGreaterThan",
      "opcode" : 172,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpSGreaterThan",
      "opcode" : 173,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpUGreaterThanEqual",
      "opcode" : 174,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpSGreaterThanEqual",
      "opcode" : 175,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpULessThan",
      "opcode" : 176,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpSLessThan",
      "opcode" : 177,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpULessThanEqual",
      "opcode" : 178,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpSLessThanEqual",
      "opcode" : 179,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFOrdEqual",
      "opcode" : 180,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFUnordEqual",
      "opcode" : 181,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFOrdNotEqual",
      "opcode" : 182,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFUnordNotEqual",
      "opcode" : 183,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFOrdLessThan",
      "opcode" : 184,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFUnordLessThan",
      "opcode" : 185,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFOrdGreaterThan",
      "opcode" : 186,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFUnordGreaterThan",
      "opcode" : 187,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFOrdLessThanEqual",
      "opcode" : 188,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFUnordLessThanEqual",
      "opcode" : 189,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFOrdGreaterThanEqual",
      "opcode" : 190,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpFUnordGreaterThanEqual",
      "opcode" : 191,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpShiftRightLogical",
      "opcode" : 194,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Base'" },
        { "kind" : "IdRef",        "name" : "'Shift'" }
      ]
    },
    {
      "opname" : "OpShiftRightArithmetic",
      "opcode" : 195,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Base'" },
        { "kind" : "IdRef",        "name" : "'Shift'" }
      ]
    },
    {
      "opname" : "OpShiftLeftLogical",
      "opcode" : 196,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Base'" },
        { "kind" : "IdRef",        "name" : "'Shift'" }
      ]
    },
    {
      "opname" : "OpBitwiseOr",
      "opcode" : 197,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpBitwiseXor",
      "opcode" : 198,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpBitwiseAnd",
      "opcode" : 199,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ]
    },
    {
      "opname" : "OpNot",
      "opcode" : 200,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand'" }
      ]
    },
    {
      "opname" : "OpBitFieldInsert",
      "opcode" : 201,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Base'" },
        { "kind" : "IdRef",        "name" : "'Insert'" },
        { "kind" : "IdRef",        "name" : "'Offset'" },
        { "kind" : "IdRef",        "name" : "'Count'" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpBitFieldSExtract",
      "opcode" : 202,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Base'" },
        { "kind" : "IdRef",        "name" : "'Offset'" },
        { "kind" : "IdRef",        "name" : "'Count'" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpBitFieldUExtract",
      "opcode" : 203,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Base'" },
        { "kind" : "IdRef",        "name" : "'Offset'" },
        { "kind" : "IdRef",        "name" : "'Count'" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpBitReverse",
      "opcode" : 204,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Base'" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpBitCount",
      "opcode" : 205,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Base'" }
      ]
    },
    {
      "opname" : "OpDPdx",
      "opcode" : 207,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'P'" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpDPdy",
      "opcode" : 208,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'P'" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpFwidth",
      "opcode" : 209,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'P'" }
      ],
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpDPdxFine",
      "opcode" : 210,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'P'" }
      ],
      "capabilities" : [ "DerivativeControl" ]
    },
    {
      "opname" : "OpDPdyFine",
      "opcode" : 211,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'P'" }
      ],
      "capabilities" : [ "DerivativeControl" ]
    },
    {
      "opname" : "OpFwidthFine",
      "opcode" : 212,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'P'" }
      ],
      "capabilities" : [ "DerivativeControl" ]
    },
    {
      "opname" : "OpDPdxCoarse",
      "opcode" : 213,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'P'" }
      ],
      "capabilities" : [ "DerivativeControl" ]
    },
    {
      "opname" : "OpDPdyCoarse",
      "opcode" : 214,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'P'" }
      ],
      "capabilities" : [ "DerivativeControl" ]
    },
    {
      "opname" : "OpFwidthCoarse",
      "opcode" : 215,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'P'" }
      ],
      "capabilities" : [ "DerivativeControl" ]
    },
    {
      "opname" : "OpEmitVertex",
      "opcode" : 218,
      "capabilities" : [ "Geometry" ]
    },
    {
      "opname" : "OpEndPrimitive",
      "opcode" : 219,
      "capabilities" : [ "Geometry" ]
    },
    {
      "opname" : "OpEmitStreamVertex",
      "opcode" : 220,
      "operands" : [
        { "kind" : "IdRef", "name" : "'Stream'" }
      ],
      "capabilities" : [ "GeometryStreams" ]
    },
    {
      "opname" : "OpEndStreamPrimitive",
      "opcode" : 221,
      "operands" : [
        { "kind" : "IdRef", "name" : "'Stream'" }
      ],
      "capabilities" : [ "GeometryStreams" ]
    },
    {
      "opname" : "OpControlBarrier",
      "opcode" : 224,
      "operands" : [
        { "kind" : "IdScope",           "name" : "'Execution'" },
        { "kind" : "IdScope",           "name" : "'Memory'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" }
      ]
    },
    {
      "opname" : "OpMemoryBarrier",
      "opcode" : 225,
      "operands" : [
        { "kind" : "IdScope",           "name" : "'Memory'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" }
      ]
    },
    {
      "opname" : "OpAtomicLoad",
      "opcode" : 227,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" }
      ]
    },
    {
      "opname" : "OpAtomicStore",
      "opcode" : 228,
      "operands" : [
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" },
        { "kind" : "IdRef",             "name" : "'Value'" }
      ]
    },
    {
      "opname" : "OpAtomicExchange",
      "opcode" : 229,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" },
        { "kind" : "IdRef",             "name" : "'Value'" }
      ]
    },
    {
      "opname" : "OpAtomicCompareExchange",
      "opcode" : 230,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Equal'" },
        { "kind" : "IdMemorySemantics", "name" : "'Unequal'" },
        { "kind" : "IdRef",             "name" : "'Value'" },
        { "kind" : "IdRef",             "name" : "'Comparator'" }
      ]
    },
    {
      "opname" : "OpAtomicCompareExchangeWeak",
      "opcode" : 231,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Equal'" },
        { "kind" : "IdMemorySemantics", "name" : "'Unequal'" },
        { "kind" : "IdRef",             "name" : "'Value'" },
        { "kind" : "IdRef",             "name" : "'Comparator'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpAtomicIIncrement",
      "opcode" : 232,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" }
      ]
    },
    {
      "opname" : "OpAtomicIDecrement",
      "opcode" : 233,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" }
      ]
    },
    {
      "opname" : "OpAtomicIAdd",
      "opcode" : 234,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" },
        { "kind" : "IdRef",             "name" : "'Value'" }
      ]
    },
    {
      "opname" : "OpAtomicISub",
      "opcode" : 235,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" },
        { "kind" : "IdRef",             "name" : "'Value'" }
      ]
    },
    {
      "opname" : "OpAtomicSMin",
      "opcode" : 236,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" },
        { "kind" : "IdRef",             "name" : "'Value'" }
      ]
    },
    {
      "opname" : "OpAtomicUMin",
      "opcode" : 237,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" },
        { "kind" : "IdRef",             "name" : "'Value'" }
      ]
    },
    {
      "opname" : "OpAtomicSMax",
      "opcode" : 238,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" },
        { "kind" : "IdRef",             "name" : "'Value'" }
      ]
    },
    {
      "opname" : "OpAtomicUMax",
      "opcode" : 239,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" },
        { "kind" : "IdRef",             "name" : "'Value'" }
      ]
    },
    {
      "opname" : "OpAtomicAnd",
      "opcode" : 240,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" },
        { "kind" : "IdRef",             "name" : "'Value'" }
      ]
    },
    {
      "opname" : "OpAtomicOr",
      "opcode" : 241,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" },
        { "kind" : "IdRef",             "name" : "'Value'" }
      ]
    },
    {
      "opname" : "OpAtomicXor",
      "opcode" : 242,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" },
        { "kind" : "IdRef",             "name" : "'Value'" }
      ]
    },
    {
      "opname" : "OpPhi",
      "opcode" : 245,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "PairIdRefIdRef", "quantifier" : "*", "name" : "'Variable, Parent, ...'" }
      ]
    },
    {
      "opname" : "OpLoopMerge",
      "opcode" : 246,
      "operands" : [
        { "kind" : "IdRef",       "name" : "'Merge Block'" },
        { "kind" : "IdRef",       "name" : "'Continue Target'" },
        { "kind" : "LoopControl" }
      ]
    },
    {
      "opname" : "OpSelectionMerge",
      "opcode" : 247,
      "operands" : [
        { "kind" : "IdRef",            "name" : "'Merge Block'" },
        { "kind" : "SelectionControl" }
      ]
    },
    {
      "opname" : "OpLabel",
      "opcode" : 248,
      "operands" : [
        { "kind" : "IdResult" }
      ]
    },
    {
      "opname" : "OpBranch",
      "opcode" : 249,
      "operands" : [
        { "kind" : "IdRef", "name" : "'Target Label'" }
      ]
    },
    {
      "opname" : "OpBranchConditional",
      "opcode" : 250,
      "operands" : [
        { "kind" : "IdRef",                              "name" : "'Condition'" },
        { "kind" : "IdRef",                              "name" : "'True Label'" },
        { "kind" : "IdRef",                              "name" : "'False Label'" },
        { "kind" : "LiteralInteger", "quantifier" : "*", "name" : "'Branch weights'" }
      ]
    },
    {
      "opname" : "OpSwitch",
      "opcode" : 251,
      "operands" : [
        { "kind" : "IdRef",                                       "name" : "'Selector'" },
        { "kind" : "IdRef",                                       "name" : "'Default'" },
        { "kind" : "PairLiteralIntegerIdRef", "quantifier" : "*", "name" : "'Target'" }
      ]
    },
    {
      "opname" : "OpKill",
      "opcode" : 252,
      "capabilities" : [ "Shader" ]
    },
    {
      "opname" : "OpReturn",
      "opcode" : 253
    },
    {
      "opname" : "OpReturnValue",
      "opcode" : 254,
      "operands" : [
        { "kind" : "IdRef", "name" : "'Value'" }
      ]
    },
    {
      "opname" : "OpUnreachable",
      "opcode" : 255
    },
    {
      "opname" : "OpLifetimeStart",
      "opcode" : 256,
      "operands" : [
        { "kind" : "IdRef",          "name" : "'Pointer'" },
        { "kind" : "LiteralInteger", "name" : "'Size'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpLifetimeStop",
      "opcode" : 257,
      "operands" : [
        { "kind" : "IdRef",          "name" : "'Pointer'" },
        { "kind" : "LiteralInteger", "name" : "'Size'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpGroupAsyncCopy",
      "opcode" : 259,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",      "name" : "'Execution'" },
        { "kind" : "IdRef",        "name" : "'Destination'" },
        { "kind" : "IdRef",        "name" : "'Source'" },
        { "kind" : "IdRef",        "name" : "'Num Elements'" },
        { "kind" : "IdRef",        "name" : "'Stride'" },
        { "kind" : "IdRef",        "name" : "'Event'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpGroupWaitEvents",
      "opcode" : 260,
      "operands" : [
        { "kind" : "IdScope", "name" : "'Execution'" },
        { "kind" : "IdRef",   "name" : "'Num Events'" },
        { "kind" : "IdRef",   "name" : "'Events List'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpGroupAll",
      "opcode" : 261,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",      "name" : "'Execution'" },
        { "kind" : "IdRef",        "name" : "'Predicate'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupAny",
      "opcode" : 262,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",      "name" : "'Execution'" },
        { "kind" : "IdRef",        "name" : "'Predicate'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupBroadcast",
      "opcode" : 263,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",      "name" : "'Execution'" },
        { "kind" : "IdRef",        "name" : "'Value'" },
        { "kind" : "IdRef",        "name" : "'LocalId'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupIAdd",
      "opcode" : 264,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupFAdd",
      "opcode" : 265,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupFMin",
      "opcode" : 266,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupUMin",
      "opcode" : 267,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupSMin",
      "opcode" : 268,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupFMax",
      "opcode" : 269,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupUMax",
      "opcode" : 270,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupSMax",
      "opcode" : 271,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpReadPipe",
      "opcode" : 274,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Pipe'" },
        { "kind" : "IdRef",        "name" : "'Pointer'" },
        { "kind" : "IdRef",        "name" : "'Packet Size'" },
        { "kind" : "IdRef",        "name" : "'Packet Alignment'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpWritePipe",
      "opcode" : 275,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Pipe'" },
        { "kind" : "IdRef",        "name" : "'Pointer'" },
        { "kind" : "IdRef",        "name" : "'Packet Size'" },
        { "kind" : "IdRef",        "name" : "'Packet Alignment'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpReservedReadPipe",
      "opcode" : 276,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Pipe'" },
        { "kind" : "IdRef",        "name" : "'Reserve Id'" },
        { "kind" : "IdRef",        "name" : "'Index'" },
        { "kind" : "IdRef",        "name" : "'Pointer'" },
        { "kind" : "IdRef",        "name" : "'Packet Size'" },
        { "kind" : "IdRef",        "name" : "'Packet Alignment'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpReservedWritePipe",
      "opcode" : 277,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Pipe'" },
        { "kind" : "IdRef",        "name" : "'Reserve Id'" },
        { "kind" : "IdRef",        "name" : "'Index'" },
        { "kind" : "IdRef",        "name" : "'Pointer'" },
        { "kind" : "IdRef",        "name" : "'Packet Size'" },
        { "kind" : "IdRef",        "name" : "'Packet Alignment'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpReserveReadPipePackets",
      "opcode" : 278,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Pipe'" },
        { "kind" : "IdRef",        "name" : "'Num Packets'" },
        { "kind" : "IdRef",        "name" : "'Packet Size'" },
        { "kind" : "IdRef",        "name" : "'Packet Alignment'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpReserveWritePipePackets",
      "opcode" : 279,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Pipe'" },
        { "kind" : "IdRef",        "name" : "'Num Packets'" },
        { "kind" : "IdRef",        "name" : "'Packet Size'" },
        { "kind" : "IdRef",        "name" : "'Packet Alignment'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpCommitReadPipe",
      "opcode" : 280,
      "operands" : [
        { "kind" : "IdRef", "name" : "'Pipe'" },
        { "kind" : "IdRef", "name" : "'Reserve Id'" },
        { "kind" : "IdRef", "name" : "'Packet Size'" },
        { "kind" : "IdRef", "name" : "'Packet Alignment'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpCommitWritePipe",
      "opcode" : 281,
      "operands" : [
        { "kind" : "IdRef", "name" : "'Pipe'" },
        { "kind" : "IdRef", "name" : "'Reserve Id'" },
        { "kind" : "IdRef", "name" : "'Packet Size'" },
        { "kind" : "IdRef", "name" : "'Packet Alignment'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpIsValidReserveId",
      "opcode" : 282,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Reserve Id'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpGetNumPipePackets",
      "opcode" : 283,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Pipe'" },
        { "kind" : "IdRef",        "name" : "'Packet Size'" },
        { "kind" : "IdRef",        "name" : "'Packet Alignment'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpGetMaxPipePackets",
      "opcode" : 284,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Pipe'" },
        { "kind" : "IdRef",        "name" : "'Packet Size'" },
        { "kind" : "IdRef",        "name" : "'Packet Alignment'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpGroupReserveReadPipePackets",
      "opcode" : 285,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",      "name" : "'Execution'" },
        { "kind" : "IdRef",        "name" : "'Pipe'" },
        { "kind" : "IdRef",        "name" : "'Num Packets'" },
        { "kind" : "IdRef",        "name" : "'Packet Size'" },
        { "kind" : "IdRef",        "name" : "'Packet Alignment'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpGroupReserveWritePipePackets",
      "opcode" : 286,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",      "name" : "'Execution'" },
        { "kind" : "IdRef",        "name" : "'Pipe'" },
        { "kind" : "IdRef",        "name" : "'Num Packets'" },
        { "kind" : "IdRef",        "name" : "'Packet Size'" },
        { "kind" : "IdRef",        "name" : "'Packet Alignment'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpGroupCommitReadPipe",
      "opcode" : 287,
      "operands" : [
        { "kind" : "IdScope", "name" : "'Execution'" },
        { "kind" : "IdRef",   "name" : "'Pipe'" },
        { "kind" : "IdRef",   "name" : "'Reserve Id'" },
        { "kind" : "IdRef",   "name" : "'Packet Size'" },
        { "kind" : "IdRef",   "name" : "'Packet Alignment'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpGroupCommitWritePipe",
      "opcode" : 288,
      "operands" : [
        { "kind" : "IdScope", "name" : "'Execution'" },
        { "kind" : "IdRef",   "name" : "'Pipe'" },
        { "kind" : "IdRef",   "name" : "'Reserve Id'" },
        { "kind" : "IdRef",   "name" : "'Packet Size'" },
        { "kind" : "IdRef",   "name" : "'Packet Alignment'" }
      ],
      "capabilities" : [ "Pipes" ]
    },
    {
      "opname" : "OpEnqueueMarker",
      "opcode" : 291,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Queue'" },
        { "kind" : "IdRef",        "name" : "'Num Events'" },
        { "kind" : "IdRef",        "name" : "'Wait Events'" },
        { "kind" : "IdRef",        "name" : "'Ret Event'" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpEnqueueKernel",
      "opcode" : 292,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                            "name" : "'Queue'" },
        { "kind" : "IdRef",                            "name" : "'Flags'" },
        { "kind" : "IdRef",                            "name" : "'ND Range'" },
        { "kind" : "IdRef",                            "name" : "'Num Events'" },
        { "kind" : "IdRef",                            "name" : "'Wait Events'" },
        { "kind" : "IdRef",                            "name" : "'Ret Event'" },
        { "kind" : "IdRef",                            "name" : "'Invoke'" },
        { "kind" : "IdRef",                            "name" : "'Param'" },
        { "kind" : "IdRef",                            "name" : "'Param Size'" },
        { "kind" : "IdRef",                            "name" : "'Param Align'" },
        { "kind" : "IdRef",        "quantifier" : "*", "name" : "'Local Size'" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpGetKernelNDrangeSubGroupCount",
      "opcode" : 293,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'ND Range'" },
        { "kind" : "IdRef",        "name" : "'Invoke'" },
        { "kind" : "IdRef",        "name" : "'Param'" },
        { "kind" : "IdRef",        "name" : "'Param Size'" },
        { "kind" : "IdRef",        "name" : "'Param Align'" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpGetKernelNDrangeMaxSubGroupSize",
      "opcode" : 294,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'ND Range'" },
        { "kind" : "IdRef",        "name" : "'Invoke'" },
        { "kind" : "IdRef",        "name" : "'Param'" },
        { "kind" : "IdRef",        "name" : "'Param Size'" },
        { "kind" : "IdRef",        "name" : "'Param Align'" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpGetKernelWorkGroupSize",
      "opcode" : 295,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Invoke'" },
        { "kind" : "IdRef",        "name" : "'Param'" },
        { "kind" : "IdRef",        "name" : "'Param Size'" },
        { "kind" : "IdRef",        "name" : "'Param Align'" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpGetKernelPreferredWorkGroupSizeMultiple",
      "opcode" : 296,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Invoke'" },
        { "kind" : "IdRef",        "name" : "'Param'" },
        { "kind" : "IdRef",        "name" : "'Param Size'" },
        { "kind" : "IdRef",        "name" : "'Param Align'" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpRetainEvent",
      "opcode" : 297,
      "operands" : [
        { "kind" : "IdRef", "name" : "'Event'" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpReleaseEvent",
      "opcode" : 298,
      "operands" : [
        { "kind" : "IdRef", "name" : "'Event'" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpCreateUserEvent",
      "opcode" : 299,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpIsValidEvent",
      "opcode" : 300,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Event'" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpSetUserEventStatus",
      "opcode" : 301,
      "operands" : [
        { "kind" : "IdRef", "name" : "'Event'" },
        { "kind" : "IdRef", "name" : "'Status'" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpCaptureEventProfilingInfo",
      "opcode" : 302,
      "operands" : [
        { "kind" : "IdRef", "name" : "'Event'" },
        { "kind" : "IdRef", "name" : "'Profiling Info'" },
        { "kind" : "IdRef", "name" : "'Value'" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpGetDefaultQueue",
      "opcode" : 303,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpBuildNDRange",
      "opcode" : 304,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'GlobalWorkSize'" },
        { "kind" : "IdRef",        "name" : "'LocalWorkSize'" },
        { "kind" : "IdRef",        "name" : "'GlobalWorkOffset'" }
      ],
      "capabilities" : [ "DeviceEnqueue" ]
    },
    {
      "opname" : "OpImageSparseSampleImplicitLod",
      "opcode" : 305,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Sampled Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ],
      "capabilities" : [ "SparseResidency" ]
    },
    {
      "opname" : "OpImageSparseSampleExplicitLod",
      "opcode" : 306,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",         "name" : "'Sampled Image'" },
        { "kind" : "IdRef",         "name" : "'Coordinate'" },
        { "kind" : "ImageOperands" }
      ],
      "capabilities" : [ "SparseResidency" ]
    },
    {
      "opname" : "OpImageSparseSampleDrefImplicitLod",
      "opcode" : 307,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Sampled Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "IdRef",                             "name" : "'D~ref~'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ],
      "capabilities" : [ "SparseResidency" ]
    },
    {
      "opname" : "OpImageSparseSampleDrefExplicitLod",
      "opcode" : 308,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",         "name" : "'Sampled Image'" },
        { "kind" : "IdRef",         "name" : "'Coordinate'" },
        { "kind" : "IdRef",         "name" : "'D~ref~'" },
        { "kind" : "ImageOperands" }
      ],
      "capabilities" : [ "SparseResidency" ]
    },
    {
      "opname" : "OpImageSparseSampleProjImplicitLod",
      "opcode" : 309,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Sampled Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ],
      "capabilities" : [ "SparseResidency" ]
    },
    {
      "opname" : "OpImageSparseSampleProjExplicitLod",
      "opcode" : 310,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",         "name" : "'Sampled Image'" },
        { "kind" : "IdRef",         "name" : "'Coordinate'" },
        { "kind" : "ImageOperands" }
      ],
      "capabilities" : [ "SparseResidency" ]
    },
    {
      "opname" : "OpImageSparseSampleProjDrefImplicitLod",
      "opcode" : 311,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Sampled Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "IdRef",                             "name" : "'D~ref~'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ],
      "capabilities" : [ "SparseResidency" ]
    },
    {
      "opname" : "OpImageSparseSampleProjDrefExplicitLod",
      "opcode" : 312,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",         "name" : "'Sampled Image'" },
        { "kind" : "IdRef",         "name" : "'Coordinate'" },
        { "kind" : "IdRef",         "name" : "'D~ref~'" },
        { "kind" : "ImageOperands" }
      ],
      "capabilities" : [ "SparseResidency" ]
    },
    {
      "opname" : "OpImageSparseFetch",
      "opcode" : 313,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ],
      "capabilities" : [ "SparseResidency" ]
    },
    {
      "opname" : "OpImageSparseGather",
      "opcode" : 314,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Sampled Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "IdRef",                             "name" : "'Component'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ],
      "capabilities" : [ "SparseResidency" ]
    },
    {
      "opname" : "OpImageSparseDrefGather",
      "opcode" : 315,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Sampled Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "IdRef",                             "name" : "'D~ref~'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ],
      "capabilities" : [ "SparseResidency" ]
    },
    {
      "opname" : "OpImageSparseTexelsResident",
      "opcode" : 316,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Resident Code'" }
      ],
      "capabilities" : [ "SparseResidency" ]
    },
    {
      "opname" : "OpNoLine",
      "opcode" : 317
    },
    {
      "opname" : "OpAtomicFlagTestAndSet",
      "opcode" : 318,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpAtomicFlagClear",
      "opcode" : 319,
      "operands" : [
        { "kind" : "IdRef",             "name" : "'Pointer'" },
        { "kind" : "IdScope",           "name" : "'Scope'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" }
      ],
      "capabilities" : [ "Kernel" ]
    },
    {
      "opname" : "OpImageSparseRead",
      "opcode" : 320,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",                             "name" : "'Image'" },
        { "kind" : "IdRef",                             "name" : "'Coordinate'" },
        { "kind" : "ImageOperands", "quantifier" : "?" }
      ],
      "capabilities" : [ "SparseResidency" ]
    },
    {
      "opname" : "OpSizeOf",
      "opcode" : 321,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Pointer'" }
      ],
      "capabilities" : [ "Addresses" ]
    },
    {
      "opname" : "OpTypePipeStorage",
      "opcode" : 322,
      "operands" : [
        { "kind" : "IdResult" }
      ],
      "capabilities" : [ "PipeStorage" ]
    },
    {
      "opname" : "OpConstantPipeStorage",
      "opcode" : 323,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "LiteralInteger", "name" : "'Packet Size'" },
        { "kind" : "LiteralInteger", "name" : "'Packet Alignment'" },
        { "kind" : "LiteralInteger", "name" : "'Capacity'" }
      ],
      "capabilities" : [ "PipeStorage" ]
    },
    {
      "opname" : "OpCreatePipeFromPipeStorage",
      "opcode" : 324,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Pipe Storage'" }
      ],
      "capabilities" : [ "PipeStorage" ]
    },
    {
      "opname" : "OpGetKernelLocalSizeForSubgroupCount",
      "opcode" : 325,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Subgroup Count'" },
        { "kind" : "IdRef",        "name" : "'Invoke'" },
        { "kind" : "IdRef",        "name" : "'Param'" },
        { "kind" : "IdRef",        "name" : "'Param Size'" },
        { "kind" : "IdRef",        "name" : "'Param Align'" }
      ],
      "capabilities" : [ "SubgroupDispatch" ]
    },
    {
      "opname" : "OpGetKernelMaxNumSubgroups",
      "opcode" : 326,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Invoke'" },
        { "kind" : "IdRef",        "name" : "'Param'" },
        { "kind" : "IdRef",        "name" : "'Param Size'" },
        { "kind" : "IdRef",        "name" : "'Param Align'" }
      ],
      "capabilities" : [ "SubgroupDispatch" ]
    },
    {
      "opname" : "OpTypeNamedBarrier",
      "opcode" : 327,
      "operands" : [
        { "kind" : "IdResult" }
      ],
      "capabilities" : [ "NamedBarrier" ]
    },
    {
      "opname" : "OpNamedBarrierInitialize",
      "opcode" : 328,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Subgroup Count'" }
      ],
      "capabilities" : [ "NamedBarrier" ]
    },
    {
      "opname" : "OpMemoryNamedBarrier",
      "opcode" : 329,
      "operands" : [
        { "kind" : "IdRef",             "name" : "'Named Barrier'" },
        { "kind" : "IdScope",           "name" : "'Memory'" },
        { "kind" : "IdMemorySemantics", "name" : "'Semantics'" }
      ],
      "capabilities" : [ "NamedBarrier" ]
    },
    {
      "opname" : "OpModuleProcessed",
      "opcode" : 330,
      "operands" : [
        { "kind" : "LiteralString", "name" : "'Process'" }
      ]
    },
    {
      "opname" : "OpExecutionModeId",
      "opcode" : 331,
      "operands" : [
        { "kind" : "IdRef",           "name" : "'Entry Point'" },
        { "kind" : "ExecutionMode",   "name" : "'Mode'" }
      ]
    },
    {
      "opname" : "OpDecorateId",
      "opcode" : 332,
      "operands" : [
        { "kind" : "IdRef",      "name" : "'Target'" },
        { "kind" : "Decoration" }
      ]
    },
    {
      "opname" : "OpSubgroupBallotKHR",
      "opcode" : 4421,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef", "name" : "'Predicate'" }
      ],
      "capabilities" : [ "SubgroupBallotKHR" ]
    },
    {
      "opname" : "OpSubgroupFirstInvocationKHR",
      "opcode" : 4422,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef", "name" : "'Value'" }
      ],
      "capabilities" : [ "SubgroupBallotKHR" ]
    },
    {
      "opname" : "OpSubgroupAllKHR",
      "opcode" : 4428,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef", "name" : "'Predicate'" }
      ],
      "capabilities" : [ "SubgroupVoteKHR" ]
    },
    {
      "opname" : "OpSubgroupAnyKHR",
      "opcode" : 4429,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef", "name" : "'Predicate'" }
      ],
      "capabilities" : [ "SubgroupVoteKHR" ]
    },
    {
      "opname" : "OpSubgroupAllEqualKHR",
      "opcode" : 4430,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef", "name" : "'Predicate'" }
      ],
      "capabilities" : [ "SubgroupVoteKHR" ]
    },
    {
      "opname" : "OpSubgroupReadInvocationKHR",
      "opcode" : 4432,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef", "name" : "'Value'" },
        { "kind" : "IdRef", "name" : "'Index'" }
      ],
      "capabilities" : [ "SubgroupBallotKHR" ]
    },
    {
      "opname" : "OpGroupIAddNonUniformAMD",
      "opcode" : 5000,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupFAddNonUniformAMD",
      "opcode" : 5001,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupFMinNonUniformAMD",
      "opcode" : 5002,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupUMinNonUniformAMD",
      "opcode" : 5003,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupSMinNonUniformAMD",
      "opcode" : 5004,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupFMaxNonUniformAMD",
      "opcode" : 5005,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupUMaxNonUniformAMD",
      "opcode" : 5006,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpGroupSMaxNonUniformAMD",
      "opcode" : 5007,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdScope",        "name" : "'Execution'" },
        { "kind" : "GroupOperation", "name" : "'Operation'" },
        { "kind" : "IdRef",          "name" : "'X'" }
      ],
      "capabilities" : [ "Groups" ]
    },
    {
      "opname" : "OpFragmentMaskFetchAMD",
      "opcode" : 5011,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef", "name" : "'Image'" },
        { "kind" : "IdRef", "name" : "'Coordinate'" }
      ],
      "capabilities" : [ "FragmentMaskAMD" ]
    },
    {
      "opname" : "OpFragmentFetchAMD",
      "opcode" : 5012,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef", "name" : "'Image'" },
        { "kind" : "IdRef", "name" : "'Coordinate'" },
        { "kind" : "IdRef", "name" : "'Fragment Index'" }
      ],
      "capabilities" : [ "FragmentMaskAMD" ]
    }
  ],
  "operand_kinds" : [
    {
      "category" : "BitEnum",
      "kind" : "ImageOperands",
      "enumerants" : [
        {
          "enumerant" : "None",
          "value" : "0x0000"
        },
        {
          "enumerant" : "Bias",
          "value" : "0x0001",
          "capabilities" : [ "Shader" ],
          "parameters" : [
            { "kind" : "IdRef" }
          ]
        },
        {
          "enumerant" : "Lod",
          "value" : "0x0002",
          "parameters" : [
            { "kind" : "IdRef" }
          ]
        },
        {
          "enumerant" : "Grad",
          "value" : "0x0004",
          "parameters" : [
            { "kind" : "IdRef" },
            { "kind" : "IdRef" }
          ]
        },
        {
          "enumerant" : "ConstOffset",
          "value" : "0x0008",
          "parameters" : [
            { "kind" : "IdRef" }
          ]
        },
        {
          "enumerant" : "Offset",
          "value" : "0x0010",
          "capabilities" : [ "ImageGatherExtended" ],
          "parameters" : [
            { "kind" : "IdRef" }
          ]
        },
        {
          "enumerant" : "ConstOffsets",
          "value" : "0x0020",
          "parameters" : [
            { "kind" : "IdRef" }
          ]
        },
        {
          "enumerant" : "Sample",
          "value" : "0x0040",
          "parameters" : [
            { "kind" : "IdRef" }
          ]
        },
        {
          "enumerant" : "MinLod",
          "value" : "0x0080",
          "capabilities" : [ "MinLod" ],
          "parameters" : [
            { "kind" : "IdRef" }
          ]
        }
      ]
    },
    {
      "category" : "BitEnum",
      "kind" : "FPFastMathMode",
      "enumerants" : [
        {
          "enumerant" : "None",
          "value" : "0x0000"
        },
        {
          "enumerant" : "NotNaN",
          "value" : "0x0001",
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "NotInf",
          "value" : "0x0002",
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "NSZ",
          "value" : "0x0004",
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "AllowRecip",
          "value" : "0x0008",
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Fast",
          "value" : "0x0010",
          "capabilities" : [ "Kernel" ]
        }
      ]
    },
    {
      "category" : "BitEnum",
      "kind" : "SelectionControl",
      "enumerants" : [
        {
          "enumerant" : "None",
          "value" : "0x0000"
        },
        {
          "enumerant" : "Flatten",
          "value" : "0x0001"
        },
        {
          "enumerant" : "DontFlatten",
          "value" : "0x0002"
        }
      ]
    },
    {
      "category" : "BitEnum",
      "kind" : "LoopControl",
      "enumerants" : [
        {
          "enumerant" : "None",
          "value" : "0x0000"
        },
        {
          "enumerant" : "Unroll",
          "value" : "0x0001"
        },
        {
          "enumerant" : "DontUnroll",
          "value" : "0x0002"
        },
        {
          "enumerant" : "DependencyInfinite",
          "value" : "0x0004"
        },
        {
          "enumerant" : "DependencyLength",
          "value" : "0x0008",
          "parameters" : [
            { "kind" : "LiteralInteger" }
          ]

        }
      ]
    },
    {
      "category" : "BitEnum",
      "kind" : "FunctionControl",
      "enumerants" : [
        {
          "enumerant" : "None",
          "value" : "0x0000"
        },
        {
          "enumerant" : "Inline",
          "value" : "0x0001"
        },
        {
          "enumerant" : "DontInline",
          "value" : "0x0002"
        },
        {
          "enumerant" : "Pure",
          "value" : "0x0004"
        },
        {
          "enumerant" : "Const",
          "value" : "0x0008"
        }
      ]
    },
    {
      "category" : "BitEnum",
      "kind" : "MemorySemantics",
      "enumerants" : [
        {
          "enumerant" : "Relaxed",
          "value" : "0x0000"
        },
        {
          "enumerant" : "None",
          "value" : "0x0000"
        },
        {
          "enumerant" : "Acquire",
          "value" : "0x0002"
        },
        {
          "enumerant" : "Release",
          "value" : "0x0004"
        },
        {
          "enumerant" : "AcquireRelease",
          "value" : "0x0008"
        },
        {
          "enumerant" : "SequentiallyConsistent",
          "value" : "0x0010"
        },
        {
          "enumerant" : "UniformMemory",
          "value" : "0x0040",
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "SubgroupMemory",
          "value" : "0x0080"
        },
        {
          "enumerant" : "WorkgroupMemory",
          "value" : "0x0100"
        },
        {
          "enumerant" : "CrossWorkgroupMemory",
          "value" : "0x0200"
        },
        {
          "enumerant" : "AtomicCounterMemory",
          "value" : "0x0400",
          "capabilities" : [ "AtomicStorage" ]
        },
        {
          "enumerant" : "ImageMemory",
          "value" : "0x0800"
        }
      ]
    },
    {
      "category" : "BitEnum",
      "kind" : "MemoryAccess",
      "enumerants" : [
        {
          "enumerant" : "None",
          "value" : "0x0000"
        },
        {
          "enumerant" : "Volatile",
          "value" : "0x0001"
        },
        {
          "enumerant" : "Aligned",
          "value" : "0x0002",
          "parameters" : [
            { "kind" : "LiteralInteger" }
          ]
        },
        {
          "enumerant" : "Nontemporal",
          "value" : "0x0004"
        }
      ]
    },
    {
      "category" : "BitEnum",
      "kind" : "KernelProfilingInfo",
      "enumerants" : [
        {
          "enumerant" : "None",
          "value" : "0x0000"
        },
        {
          "enumerant" : "CmdExecTime",
          "value" : "0x0001",
          "capabilities" : [ "Kernel" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "SourceLanguage",
      "enumerants" : [
        {
          "enumerant" : "Unknown",
          "value" : 0
        },
        {
          "enumerant" : "ESSL",
          "value" : 1
        },
        {
          "enumerant" : "GLSL",
          "value" : 2
        },
        {
          "enumerant" : "OpenCL_C",
          "value" : 3
        },
        {
          "enumerant" : "OpenCL_CPP",
          "value" : 4
        },
        {
          "enumerant" : "HLSL",
          "value" : 5
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "ExecutionModel",
      "enumerants" : [
        {
          "enumerant" : "Vertex",
          "value" : 0,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "TessellationControl",
          "value" : 1,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "TessellationEvaluation",
          "value" : 2,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "Geometry",
          "value" : 3,
          "capabilities" : [ "Geometry" ]
        },
        {
          "enumerant" : "Fragment",
          "value" : 4,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "GLCompute",
          "value" : 5,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Kernel",
          "value" : 6,
          "capabilities" : [ "Kernel" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "AddressingModel",
      "enumerants" : [
        {
          "enumerant" : "Logical",
          "value" : 0
        },
        {
          "enumerant" : "Physical32",
          "value" : 1,
          "capabilities" : [ "Addresses" ]
        },
        {
          "enumerant" : "Physical64",
          "value" : 2,
          "capabilities" : [ "Addresses" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "MemoryModel",
      "enumerants" : [
        {
          "enumerant" : "Simple",
          "value" : 0,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "GLSL450",
          "value" : 1,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "OpenCL",
          "value" : 2,
          "capabilities" : [ "Kernel" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "ExecutionMode",
      "enumerants" : [
        {
          "enumerant" : "Invocations",
          "value" : 0,
          "capabilities" : [ "Geometry" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Number of <<Invocation,invocations>>'" }
          ]
        },
        {
          "enumerant" : "SpacingEqual",
          "value" : 1,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "SpacingFractionalEven",
          "value" : 2,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "SpacingFractionalOdd",
          "value" : 3,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "VertexOrderCw",
          "value" : 4,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "VertexOrderCcw",
          "value" : 5,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "PixelCenterInteger",
          "value" : 6,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "OriginUpperLeft",
          "value" : 7,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "OriginLowerLeft",
          "value" : 8,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "EarlyFragmentTests",
          "value" : 9,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "PointMode",
          "value" : 10,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "Xfb",
          "value" : 11,
          "capabilities" : [ "TransformFeedback" ]
        },
        {
          "enumerant" : "DepthReplacing",
          "value" : 12,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "DepthGreater",
          "value" : 14,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "DepthLess",
          "value" : 15,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "DepthUnchanged",
          "value" : 16,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "LocalSize",
          "value" : 17,
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'x size'" },
            { "kind" : "LiteralInteger", "name" : "'y size'" },
            { "kind" : "LiteralInteger", "name" : "'z size'" }
          ]
        },
        {
          "enumerant" : "LocalSizeHint",
          "value" : 18,
          "capabilities" : [ "Kernel" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'x size'" },
            { "kind" : "LiteralInteger", "name" : "'y size'" },
            { "kind" : "LiteralInteger", "name" : "'z size'" }
          ]
        },
        {
          "enumerant" : "InputPoints",
          "value" : 19,
          "capabilities" : [ "Geometry" ]
        },
        {
          "enumerant" : "InputLines",
          "value" : 20,
          "capabilities" : [ "Geometry" ]
        },
        {
          "enumerant" : "InputLinesAdjacency",
          "value" : 21,
          "capabilities" : [ "Geometry" ]
        },
        {
          "enumerant" : "Triangles",
          "value" : 22,
          "capabilities" : [ "Geometry", "Tessellation" ]
        },
        {
          "enumerant" : "InputTrianglesAdjacency",
          "value" : 23,
          "capabilities" : [ "Geometry" ]
        },
        {
          "enumerant" : "Quads",
          "value" : 24,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "Isolines",
          "value" : 25,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "OutputVertices",
          "value" : 26,
          "capabilities" : [ "Geometry", "Tessellation" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Vertex count'" }
          ]
        },
        {
          "enumerant" : "OutputPoints",
          "value" : 27,
          "capabilities" : [ "Geometry" ]
        },
        {
          "enumerant" : "OutputLineStrip",
          "value" : 28,
          "capabilities" : [ "Geometry" ]
        },
        {
          "enumerant" : "OutputTriangleStrip",
          "value" : 29,
          "capabilities" : [ "Geometry" ]
        },
        {
          "enumerant" : "VecTypeHint",
          "value" : 30,
          "capabilities" : [ "Kernel" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Vector type'" }
          ]
        },
        {
          "enumerant" : "ContractionOff",
          "value" : 31,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Initializer",
          "value" : 33,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Finalizer",
          "value" : 34,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "SubgroupSize",
          "value" : 35,
          "capabilities" : [ "SubgroupDispatch" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Subgroup Size'" }
          ]
        },
        {
          "enumerant" : "SubgroupsPerWorkgroup",
          "value" : 36,
          "capabilities" : [ "SubgroupDispatch" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Subgroups Per Workgroup'" }
          ]
        },
        {
          "enumerant" : "SubgroupsPerWorkgroupId",
          "value" : 37,
          "capabilities" : [ "SubgroupDispatch" ],
          "parameters" : [
            { "kind" : "IdRef", "name" : "'Subgroups Per Workgroup'" }
          ]
        },
        {
          "enumerant" : "LocalSizeId",
          "value" : 38,
          "parameters" : [
            { "kind" : "IdRef", "name" : "'x size'" },
            { "kind" : "IdRef", "name" : "'y size'" },
            { "kind" : "IdRef", "name" : "'z size'" }
          ]
        },
        {
          "enumerant" : "LocalSizeHintId",
          "value" : 39,
          "capabilities" : [ "Kernel" ],
          "parameters" : [
            { "kind" : "IdRef", "name" : "'Local Size Hint'" }
          ]
        },
        {
          "enumerant" : "PostDepthCoverage",
          "value" : 4446,
          "capabilities" : [ "SampleMaskPostDepthCoverage" ]
        },
        {
          "enumerant" : "StencilRefReplacingEXT",
          "value" : 5027,
          "capabilities" : [ "StencilExportEXT" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "StorageClass",
      "enumerants" : [
        {
          "enumerant" : "UniformConstant",
          "value" : 0
        },
        {
          "enumerant" : "Input",
          "value" : 1
        },
        {
          "enumerant" : "Uniform",
          "value" : 2,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Output",
          "value" : 3,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Workgroup",
          "value" : 4
        },
        {
          "enumerant" : "CrossWorkgroup",
          "value" : 5
        },
        {
          "enumerant" : "Private",
          "value" : 6,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Function",
          "value" : 7
        },
        {
          "enumerant" : "Generic",
          "value" : 8,
          "capabilities" : [ "GenericPointer" ]
        },
        {
          "enumerant" : "PushConstant",
          "value" : 9,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "AtomicCounter",
          "value" : 10,
          "capabilities" : [ "AtomicStorage" ]
        },
        {
          "enumerant" : "Image",
          "value" : 11
        },
        {
          "enumerant" : "StorageBuffer",
          "value" : 12,
          "extensions" : [
            "SPV_KHR_storage_buffer_storage_class",
            "SPV_KHR_variable_pointers"
          ],
          "capabilities" : [ "Shader" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "Dim",
      "enumerants" : [
        {
          "enumerant" : "1D",
          "value" : 0,
          "capabilities" : [ "Sampled1D" ]
        },
        {
          "enumerant" : "2D",
          "value" : 1
        },
        {
          "enumerant" : "3D",
          "value" : 2
        },
        {
          "enumerant" : "Cube",
          "value" : 3,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Rect",
          "value" : 4,
          "capabilities" : [ "SampledRect" ]
        },
        {
          "enumerant" : "Buffer",
          "value" : 5,
          "capabilities" : [ "SampledBuffer" ]
        },
        {
          "enumerant" : "SubpassData",
          "value" : 6,
          "capabilities" : [ "InputAttachment" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "SamplerAddressingMode",
      "enumerants" : [
        {
          "enumerant" : "None",
          "value" : 0,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "ClampToEdge",
          "value" : 1,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Clamp",
          "value" : 2,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Repeat",
          "value" : 3,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "RepeatMirrored",
          "value" : 4,
          "capabilities" : [ "Kernel" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "SamplerFilterMode",
      "enumerants" : [
        {
          "enumerant" : "Nearest",
          "value" : 0,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Linear",
          "value" : 1,
          "capabilities" : [ "Kernel" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "ImageFormat",
      "enumerants" : [
        {
          "enumerant" : "Unknown",
          "value" : 0
        },
        {
          "enumerant" : "Rgba32f",
          "value" : 1,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Rgba16f",
          "value" : 2,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "R32f",
          "value" : 3,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Rgba8",
          "value" : 4,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Rgba8Snorm",
          "value" : 5,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Rg32f",
          "value" : 6,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "Rg16f",
          "value" : 7,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "R11fG11fB10f",
          "value" : 8,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "R16f",
          "value" : 9,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "Rgba16",
          "value" : 10,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "Rgb10A2",
          "value" : 11,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "Rg16",
          "value" : 12,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "Rg8",
          "value" : 13,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "R16",
          "value" : 14,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "R8",
          "value" : 15,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "Rgba16Snorm",
          "value" : 16,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "Rg16Snorm",
          "value" : 17,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "Rg8Snorm",
          "value" : 18,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "R16Snorm",
          "value" : 19,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "R8Snorm",
          "value" : 20,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "Rgba32i",
          "value" : 21,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Rgba16i",
          "value" : 22,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Rgba8i",
          "value" : 23,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "R32i",
          "value" : 24,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Rg32i",
          "value" : 25,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "Rg16i",
          "value" : 26,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "Rg8i",
          "value" : 27,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "R16i",
          "value" : 28,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "R8i",
          "value" : 29,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "Rgba32ui",
          "value" : 30,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Rgba16ui",
          "value" : 31,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Rgba8ui",
          "value" : 32,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "R32ui",
          "value" : 33,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Rgb10a2ui",
          "value" : 34,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "Rg32ui",
          "value" : 35,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "Rg16ui",
          "value" : 36,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "Rg8ui",
          "value" : 37,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "R16ui",
          "value" : 38,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        },
        {
          "enumerant" : "R8ui",
          "value" : 39,
          "capabilities" : [ "StorageImageExtendedFormats" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "ImageChannelOrder",
      "enumerants" : [
        {
          "enumerant" : "R",
          "value" : 0,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "A",
          "value" : 1,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "RG",
          "value" : 2,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "RA",
          "value" : 3,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "RGB",
          "value" : 4,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "RGBA",
          "value" : 5,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "BGRA",
          "value" : 6,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "ARGB",
          "value" : 7,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Intensity",
          "value" : 8,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Luminance",
          "value" : 9,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Rx",
          "value" : 10,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "RGx",
          "value" : 11,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "RGBx",
          "value" : 12,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Depth",
          "value" : 13,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "DepthStencil",
          "value" : 14,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "sRGB",
          "value" : 15,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "sRGBx",
          "value" : 16,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "sRGBA",
          "value" : 17,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "sBGRA",
          "value" : 18,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "ABGR",
          "value" : 19,
          "capabilities" : [ "Kernel" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "ImageChannelDataType",
      "enumerants" : [
        {
          "enumerant" : "SnormInt8",
          "value" : 0,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "SnormInt16",
          "value" : 1,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "UnormInt8",
          "value" : 2,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "UnormInt16",
          "value" : 3,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "UnormShort565",
          "value" : 4,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "UnormShort555",
          "value" : 5,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "UnormInt101010",
          "value" : 6,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "SignedInt8",
          "value" : 7,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "SignedInt16",
          "value" : 8,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "SignedInt32",
          "value" : 9,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "UnsignedInt8",
          "value" : 10,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "UnsignedInt16",
          "value" : 11,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "UnsignedInt32",
          "value" : 12,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "HalfFloat",
          "value" : 13,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Float",
          "value" : 14,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "UnormInt24",
          "value" : 15,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "UnormInt101010_2",
          "value" : 16,
          "capabilities" : [ "Kernel" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "FPRoundingMode",
      "enumerants" : [
        {
          "enumerant" : "RTE",
          "value" : 0,
          "capabilities" : [
            "Kernel",
            "StorageUniformBufferBlock16",
            "StorageUniform16",
            "StoragePushConstant16",
            "StorageInputOutput16"
          ]
        },
        {
          "enumerant" : "RTZ",
          "value" : 1,
          "capabilities" : [
            "Kernel",
            "StorageUniformBufferBlock16",
            "StorageUniform16",
            "StoragePushConstant16",
            "StorageInputOutput16"
          ]
        },
        {
          "enumerant" : "RTP",
          "value" : 2,
          "capabilities" : [
            "Kernel",
            "StorageUniformBufferBlock16",
            "StorageUniform16",
            "StoragePushConstant16",
            "StorageInputOutput16"
          ]
        },
        {
          "enumerant" : "RTN",
          "value" : 3,
          "capabilities" : [
            "Kernel",
            "StorageUniformBufferBlock16",
            "StorageUniform16",
            "StoragePushConstant16",
            "StorageInputOutput16"
          ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "LinkageType",
      "enumerants" : [
        {
          "enumerant" : "Export",
          "value" : 0,
          "capabilities" : [ "Linkage" ]
        },
        {
          "enumerant" : "Import",
          "value" : 1,
          "capabilities" : [ "Linkage" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "AccessQualifier",
      "enumerants" : [
        {
          "enumerant" : "ReadOnly",
          "value" : 0,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "WriteOnly",
          "value" : 1,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "ReadWrite",
          "value" : 2,
          "capabilities" : [ "Kernel" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "FunctionParameterAttribute",
      "enumerants" : [
        {
          "enumerant" : "Zext",
          "value" : 0,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Sext",
          "value" : 1,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "ByVal",
          "value" : 2,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Sret",
          "value" : 3,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "NoAlias",
          "value" : 4,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "NoCapture",
          "value" : 5,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "NoWrite",
          "value" : 6,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "NoReadWrite",
          "value" : 7,
          "capabilities" : [ "Kernel" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "Decoration",
      "enumerants" : [
        {
          "enumerant" : "RelaxedPrecision",
          "value" : 0,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "SpecId",
          "value" : 1,
          "capabilities" : [ "Shader", "Kernel" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Specialization Constant ID'" }
          ]
        },
        {
          "enumerant" : "Block",
          "value" : 2,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "BufferBlock",
          "value" : 3,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "RowMajor",
          "value" : 4,
          "capabilities" : [ "Matrix" ]
        },
        {
          "enumerant" : "ColMajor",
          "value" : 5,
          "capabilities" : [ "Matrix" ]
        },
        {
          "enumerant" : "ArrayStride",
          "value" : 6,
          "capabilities" : [ "Shader" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Array Stride'" }
          ]
        },
        {
          "enumerant" : "MatrixStride",
          "value" : 7,
          "capabilities" : [ "Matrix" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Matrix Stride'" }
          ]
        },
        {
          "enumerant" : "GLSLShared",
          "value" : 8,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "GLSLPacked",
          "value" : 9,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "CPacked",
          "value" : 10,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "BuiltIn",
          "value" : 11,
          "parameters" : [
            { "kind" : "BuiltIn" }
          ]
        },
        {
          "enumerant" : "NoPerspective",
          "value" : 13,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Flat",
          "value" : 14,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Patch",
          "value" : 15,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "Centroid",
          "value" : 16,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Sample",
          "value" : 17,
          "capabilities" : [ "SampleRateShading" ]
        },
        {
          "enumerant" : "Invariant",
          "value" : 18,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Restrict",
          "value" : 19
        },
        {
          "enumerant" : "Aliased",
          "value" : 20
        },
        {
          "enumerant" : "Volatile",
          "value" : 21
        },
        {
          "enumerant" : "Constant",
          "value" : 22,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Coherent",
          "value" : 23
        },
        {
          "enumerant" : "NonWritable",
          "value" : 24
        },
        {
          "enumerant" : "NonReadable",
          "value" : 25
        },
        {
          "enumerant" : "Uniform",
          "value" : 26,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "SaturatedConversion",
          "value" : 28,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Stream",
          "value" : 29,
          "capabilities" : [ "GeometryStreams" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Stream Number'" }
          ]
        },
        {
          "enumerant" : "Location",
          "value" : 30,
          "capabilities" : [ "Shader" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Location'" }
          ]
        },
        {
          "enumerant" : "Component",
          "value" : 31,
          "capabilities" : [ "Shader" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Component'" }
          ]
        },
        {
          "enumerant" : "Index",
          "value" : 32,
          "capabilities" : [ "Shader" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Index'" }
          ]
        },
        {
          "enumerant" : "Binding",
          "value" : 33,
          "capabilities" : [ "Shader" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Binding Point'" }
          ]
        },
        {
          "enumerant" : "DescriptorSet",
          "value" : 34,
          "capabilities" : [ "Shader" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Descriptor Set'" }
          ]
        },
        {
          "enumerant" : "Offset",
          "value" : 35,
          "capabilities" : [ "Shader" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Byte Offset'" }
          ]
        },
        {
          "enumerant" : "XfbBuffer",
          "value" : 36,
          "capabilities" : [ "TransformFeedback" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'XFB Buffer Number'" }
          ]
        },
        {
          "enumerant" : "XfbStride",
          "value" : 37,
          "capabilities" : [ "TransformFeedback" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'XFB Stride'" }
          ]
        },
        {
          "enumerant" : "FuncParamAttr",
          "value" : 38,
          "capabilities" : [ "Kernel" ],
          "parameters" : [
            { "kind" : "FunctionParameterAttribute", "name" : "'Function Parameter Attribute'" }
          ]
        },
        {
          "enumerant" : "FPRoundingMode",
          "value" : 39,
          "capabilities" : [
            "Kernel",
            "StorageUniformBufferBlock16",
            "StorageUniform16",
            "StoragePushConstant16",
            "StorageInputOutput16"
          ],
          "parameters" : [
            { "kind" : "FPRoundingMode", "name" : "'Floating-Point Rounding Mode'" }
          ]
        },
        {
          "enumerant" : "FPFastMathMode",
          "value" : 40,
          "capabilities" : [ "Kernel" ],
          "parameters" : [
            { "kind" : "FPFastMathMode", "name" : "'Fast-Math Mode'" }
          ]
        },
        {
          "enumerant" : "LinkageAttributes",
          "value" : 41,
          "capabilities" : [ "Linkage" ],
          "parameters" : [
            { "kind" : "LiteralString", "name" : "'Name'" },
            { "kind" : "LinkageType",   "name" : "'Linkage Type'" }
          ]
        },
        {
          "enumerant" : "NoContraction",
          "value" : 42,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "InputAttachmentIndex",
          "value" : 43,
          "capabilities" : [ "InputAttachment" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Attachment Index'" }
          ]
        },
        {
          "enumerant" : "Alignment",
          "value" : 44,
          "capabilities" : [ "Kernel" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Alignment'" }
          ]
        },
        {
          "enumerant" : "MaxByteOffset",
          "value" : 45,
          "capabilities" : [ "Addresses" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Max Byte Offset'" }
          ]
        },
        {
          "enumerant" : "AlignmentId",
          "value" : 46,
          "capabilities" : [ "Kernel" ],
          "parameters" : [
            { "kind" : "IdRef", "name" : "'Alignment'" }
          ]
        },
        {
          "enumerant" : "MaxByteOffsetId",
          "value" : 47,
          "capabilities" : [ "Addresses" ],
          "parameters" : [
            { "kind" : "IdRef", "name" : "'Max Byte Offset'" }
          ]
        },
        {
          "enumerant" : "ExplicitInterpAMD",
          "value" : 4999
        },
        {
          "enumerant" : "OverrideCoverageNV",
          "value" : 5248,
          "capabilities" : [ "SampleMaskOverrideCoverageNV" ]
        },
        {
          "enumerant" : "PassthroughNV",
          "value" : 5250,
          "capabilities" : [ "GeometryShaderPassthroughNV" ]
        },
        {
          "enumerant" : "ViewportRelativeNV",
          "value" : 5252,
          "capabilities" : [ "ShaderViewportMaskNV" ]
        },
        {
          "enumerant" : "SecondaryViewportRelativeNV",
          "value" : 5256,
          "capabilities" : [ "ShaderStereoViewNV" ],
          "parameters" : [
            { "kind" : "LiteralInteger", "name" : "'Offset'" }
          ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "BuiltIn",
      "enumerants" : [
        {
          "enumerant" : "Position",
          "value" : 0,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "PointSize",
          "value" : 1,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "ClipDistance",
          "value" : 3,
          "capabilities" : [ "ClipDistance" ]
        },
        {
          "enumerant" : "CullDistance",
          "value" : 4,
          "capabilities" : [ "CullDistance" ]
        },
        {
          "enumerant" : "VertexId",
          "value" : 5,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "InstanceId",
          "value" : 6,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "PrimitiveId",
          "value" : 7,
          "capabilities" : [ "Geometry", "Tessellation" ]
        },
        {
          "enumerant" : "InvocationId",
          "value" : 8,
          "capabilities" : [ "Geometry", "Tessellation" ]
        },
        {
          "enumerant" : "Layer",
          "value" : 9,
          "capabilities" : [ "Geometry" ]
        },
        {
          "enumerant" : "ViewportIndex",
          "value" : 10,
          "capabilities" : [ "MultiViewport" ]
        },
        {
          "enumerant" : "TessLevelOuter",
          "value" : 11,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "TessLevelInner",
          "value" : 12,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "TessCoord",
          "value" : 13,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "PatchVertices",
          "value" : 14,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "FragCoord",
          "value" : 15,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "PointCoord",
          "value" : 16,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "FrontFacing",
          "value" : 17,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "SampleId",
          "value" : 18,
          "capabilities" : [ "SampleRateShading" ]
        },
        {
          "enumerant" : "SamplePosition",
          "value" : 19,
          "capabilities" : [ "SampleRateShading" ]
        },
        {
          "enumerant" : "SampleMask",
          "value" : 20,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "FragDepth",
          "value" : 22,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "HelperInvocation",
          "value" : 23,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "NumWorkgroups",
          "value" : 24
        },
        {
          "enumerant" : "WorkgroupSize",
          "value" : 25
        },
        {
          "enumerant" : "WorkgroupId",
          "value" : 26
        },
        {
          "enumerant" : "LocalInvocationId",
          "value" : 27
        },
        {
          "enumerant" : "GlobalInvocationId",
          "value" : 28
        },
        {
          "enumerant" : "LocalInvocationIndex",
          "value" : 29
        },
        {
          "enumerant" : "WorkDim",
          "value" : 30,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "GlobalSize",
          "value" : 31,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "EnqueuedWorkgroupSize",
          "value" : 32,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "GlobalOffset",
          "value" : 33,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "GlobalLinearId",
          "value" : 34,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "SubgroupSize",
          "value" : 36,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "SubgroupMaxSize",
          "value" : 37,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "NumSubgroups",
          "value" : 38,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "NumEnqueuedSubgroups",
          "value" : 39,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "SubgroupId",
          "value" : 40,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "SubgroupLocalInvocationId",
          "value" : 41,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "VertexIndex",
          "value" : 42,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "InstanceIndex",
          "value" : 43,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "SubgroupEqMaskKHR",
          "value" : 4416,
          "capabilities" : [ "SubgroupBallotKHR" ]
        },
        {
          "enumerant" : "SubgroupGeMaskKHR",
          "value" : 4417,
          "capabilities" : [ "SubgroupBallotKHR" ]
        },
        {
          "enumerant" : "SubgroupGtMaskKHR",
          "value" : 4418,
          "capabilities" : [ "SubgroupBallotKHR" ]
        },
        {
          "enumerant" : "SubgroupLeMaskKHR",
          "value" : 4419,
          "capabilities" : [ "SubgroupBallotKHR" ]
        },
        {
          "enumerant" : "SubgroupLtMaskKHR",
          "value" : 4420,
          "capabilities" : [ "SubgroupBallotKHR" ]
        },
        {
          "enumerant" : "BaseVertex",
          "value" : 4424,
          "capabilities" : [ "DrawParameters" ]
        },
        {
          "enumerant" : "BaseInstance",
          "value" : 4425,
          "capabilities" : [ "DrawParameters" ]
        },
        {
          "enumerant" : "DrawIndex",
          "value" : 4426,
          "capabilities" : [ "DrawParameters" ]
        },
        {
          "enumerant" : "DeviceIndex",
          "value" : 4438,
          "capabilities" : [ "DeviceGroup" ]
        },
        {
          "enumerant" : "ViewIndex",
          "value" : 4440,
          "capabilities" : [ "MultiView" ]
        },
        {
          "enumerant" : "BaryCoordNoPerspAMD",
          "value" : 4992
        },
        {
          "enumerant" : "BaryCoordNoPerspCentroidAMD",
          "value" : 4993
        },
        {
          "enumerant" : "BaryCoordNoPerspSampleAMD",
          "value" : 4994
        },
        {
          "enumerant" : "BaryCoordSmoothAMD",
          "value" : 4995
        },
        {
          "enumerant" : "BaryCoordSmoothCentroidAMD",
          "value" : 4996
        },
        {
          "enumerant" : "BaryCoordSmoothSampleAMD",
          "value" : 4997
        },
        {
          "enumerant" : "BaryCoordPullModelAMD",
          "value" : 4998
        },
        {
          "enumerant" : "FragStencilRefEXT",
          "value" : 5014,
          "capabilities" : [ "StencilExportEXT" ]
        },
        {
          "enumerant" : "ViewportMaskNV",
          "value" : 5253,
          "capabilities" : [ "ShaderViewportMaskNV" ]
        },
        {
          "enumerant" : "SecondaryPositionNV",
          "value" : 5257,
          "capabilities" : [ "ShaderStereoViewNV" ]
        },
        {
          "enumerant" : "SecondaryViewportMaskNV",
          "value" : 5258,
          "capabilities" : [ "ShaderStereoViewNV" ]
        },
        {
          "enumerant" : "PositionPerViewNV",
          "value" : 5261,
          "capabilities" : [ "PerViewAttributesNV" ]
        },
        {
          "enumerant" : "ViewportMaskPerViewNV",
          "value" : 5262,
          "capabilities" : [ "PerViewAttributesNV" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "Scope",
      "enumerants" : [
        {
          "enumerant" : "CrossDevice",
          "value" : 0
        },
        {
          "enumerant" : "Device",
          "value" : 1
        },
        {
          "enumerant" : "Workgroup",
          "value" : 2
        },
        {
          "enumerant" : "Subgroup",
          "value" : 3
        },
        {
          "enumerant" : "Invocation",
          "value" : 4
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "GroupOperation",
      "enumerants" : [
        {
          "enumerant" : "Reduce",
          "value" : 0,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "InclusiveScan",
          "value" : 1,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "ExclusiveScan",
          "value" : 2,
          "capabilities" : [ "Kernel" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "KernelEnqueueFlags",
      "enumerants" : [
        {
          "enumerant" : "NoWait",
          "value" : 0,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "WaitKernel",
          "value" : 1,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "WaitWorkGroup",
          "value" : 2,
          "capabilities" : [ "Kernel" ]
        }
      ]
    },
    {
      "category" : "ValueEnum",
      "kind" : "Capability",
      "enumerants" : [
        {
          "enumerant" : "Matrix",
          "value" : 0
        },
        {
          "enumerant" : "Shader",
          "value" : 1,
          "capabilities" : [ "Matrix" ]
        },
        {
          "enumerant" : "Geometry",
          "value" : 2,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Tessellation",
          "value" : 3,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Addresses",
          "value" : 4
        },
        {
          "enumerant" : "Linkage",
          "value" : 5
        },
        {
          "enumerant" : "Kernel",
          "value" : 6
        },
        {
          "enumerant" : "Vector16",
          "value" : 7,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Float16Buffer",
          "value" : 8,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Float16",
          "value" : 9
        },
        {
          "enumerant" : "Float64",
          "value" : 10
        },
        {
          "enumerant" : "Int64",
          "value" : 11
        },
        {
          "enumerant" : "Int64Atomics",
          "value" : 12,
          "capabilities" : [ "Int64" ]
        },
        {
          "enumerant" : "ImageBasic",
          "value" : 13,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "ImageReadWrite",
          "value" : 14,
          "capabilities" : [ "ImageBasic" ]
        },
        {
          "enumerant" : "ImageMipmap",
          "value" : 15,
          "capabilities" : [ "ImageBasic" ]
        },
        {
          "enumerant" : "Pipes",
          "value" : 17,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "Groups",
          "value" : 18
        },
        {
          "enumerant" : "DeviceEnqueue",
          "value" : 19,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "LiteralSampler",
          "value" : 20,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "AtomicStorage",
          "value" : 21,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Int16",
          "value" : 22
        },
        {
          "enumerant" : "TessellationPointSize",
          "value" : 23,
          "capabilities" : [ "Tessellation" ]
        },
        {
          "enumerant" : "GeometryPointSize",
          "value" : 24,
          "capabilities" : [ "Geometry" ]
        },
        {
          "enumerant" : "ImageGatherExtended",
          "value" : 25,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "StorageImageMultisample",
          "value" : 27,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "UniformBufferArrayDynamicIndexing",
          "value" : 28,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "SampledImageArrayDynamicIndexing",
          "value" : 29,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "StorageBufferArrayDynamicIndexing",
          "value" : 30,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "StorageImageArrayDynamicIndexing",
          "value" : 31,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "ClipDistance",
          "value" : 32,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "CullDistance",
          "value" : 33,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "ImageCubeArray",
          "value" : 34,
          "capabilities" : [ "SampledCubeArray" ]
        },
        {
          "enumerant" : "SampleRateShading",
          "value" : 35,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "ImageRect",
          "value" : 36,
          "capabilities" : [ "SampledRect" ]
        },
        {
          "enumerant" : "SampledRect",
          "value" : 37,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "GenericPointer",
          "value" : 38,
          "capabilities" : [ "Addresses" ]
        },
        {
          "enumerant" : "Int8",
          "value" : 39,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "InputAttachment",
          "value" : 40,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "SparseResidency",
          "value" : 41,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "MinLod",
          "value" : 42,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "Sampled1D",
          "value" : 43
        },
        {
          "enumerant" : "Image1D",
          "value" : 44,
          "capabilities" : [ "Sampled1D" ]
        },
        {
          "enumerant" : "SampledCubeArray",
          "value" : 45,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "SampledBuffer",
          "value" : 46
        },
        {
          "enumerant" : "ImageBuffer",
          "value" : 47,
          "capabilities" : [ "SampledBuffer" ]
        },
        {
          "enumerant" : "ImageMSArray",
          "value" : 48,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "StorageImageExtendedFormats",
          "value" : 49,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "ImageQuery",
          "value" : 50,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "DerivativeControl",
          "value" : 51,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "InterpolationFunction",
          "value" : 52,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "TransformFeedback",
          "value" : 53,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "GeometryStreams",
          "value" : 54,
          "capabilities" : [ "Geometry" ]
        },
        {
          "enumerant" : "StorageImageReadWithoutFormat",
          "value" : 55,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "StorageImageWriteWithoutFormat",
          "value" : 56,
          "capabilities" : [ "Shader" ]
        },
        {
          "enumerant" : "MultiViewport",
          "value" : 57,
          "capabilities" : [ "Geometry" ]
        },
        {
          "enumerant" : "SubgroupDispatch",
          "value" : 58,
          "capabilities" : [ "DeviceEnqueue" ]
        },
        {
          "enumerant" : "NamedBarrier",
          "value" : 59,
          "capabilities" : [ "Kernel" ]
        },
        {
          "enumerant" : "PipeStorage",
          "value" : 60,
          "capabilities" : [ "Pipes" ]
        },
        {
          "enumerant" : "SubgroupBallotKHR",
          "value" : 4423,
          "extensions" : [ "SPV_KHR_shader_ballot" ]
        },
        {
          "enumerant" : "DrawParameters",
          "value" : 4427,
          "extensions" : [ "SPV_KHR_shader_draw_parameters" ]
        },
        {
          "enumerant" : "SubgroupVoteKHR",
          "value" : 4431,
          "extensions" : [ "SPV_KHR_subgroup_vote" ]
        },
        {
          "enumerant" : "StorageBuffer16BitAccess",
          "value" : 4433,
          "extensions" : [ "SPV_KHR_16bit_storage" ]
        },
        {
          "enumerant" : "StorageUniformBufferBlock16",
          "value" : 4433,
          "extensions" : [ "SPV_KHR_16bit_storage" ]
        },
        {
          "enumerant" : "UniformAndStorageBuffer16BitAccess",
          "value" : 4434,
          "capabilities" : [
            "StorageBuffer16BitAccess",
            "StorageUniformBufferBlock16"
          ],
          "extensions" : [ "SPV_KHR_16bit_storage" ]
        },
        {
          "enumerant" : "StorageUniform16",
          "value" : 4434,
          "capabilities" : [
            "StorageBuffer16BitAccess",
            "StorageUniformBufferBlock16"
          ],
          "extensions" : [ "SPV_KHR_16bit_storage" ]
        },
        {
          "enumerant" : "StoragePushConstant16",
          "value" : 4435,
          "extensions" : [ "SPV_KHR_16bit_storage" ]
        },
        {
          "enumerant" : "StorageInputOutput16",
          "value" : 4436,
          "extensions" : [ "SPV_KHR_16bit_storage" ]
        },
        {
          "enumerant" : "DeviceGroup",
          "value" : 4437,
          "extensions" : [ "SPV_KHR_device_group" ]
        },
        {
          "enumerant" : "MultiView",
          "value" : 4439,
          "capabilities" : [ "Shader" ],
          "extensions" : [ "SPV_KHR_multiview" ]
        },
        {
          "enumerant" : "VariablePointersStorageBuffer",
          "value" : 4441,
          "capabilities" : [ "Shader" ],
          "extensions" : [ "SPV_KHR_variable_pointers" ]
        },
        {
          "enumerant" : "VariablePointers",
          "value" : 4442,
          "capabilities" : [ "VariablePointersStorageBuffer" ],
          "extensions" : [ "SPV_KHR_variable_pointers" ]
        },
        {
            "enumerant": "AtomicStorageOps",
            "value": 4445,
            "extensions": [ "SPV_KHR_shader_atomic_counter_ops" ]
        },
        {
          "enumerant" : "SampleMaskPostDepthCoverage",
          "value" : 4447,
          "extensions" : [ "SPV_KHR_post_depth_coverage" ]
        },
        {
          "enumerant" : "ImageGatherBiasLodAMD",
          "value" : 5009,
          "capabilities" : [ "Shader" ],
          "extensions" : [ "SPV_AMD_texture_gather_bias_lod" ]
        },
        {
          "enumerant" : "FragmentMaskAMD",
          "value" : 5010,
          "capabilities" : [ "Shader" ],
          "extensions" : [ "SPV_AMD_shader_fragment_mask" ]
        },
        {
          "enumerant" : "StencilExportEXT",
          "value" : 5013,
          "capabilities" : [ "Shader" ],
          "extensions" : [ "SPV_EXT_shader_stencil_export" ]
        },
        {
          "enumerant" : "ImageReadWriteLodAMD",
          "value" : 5015,
          "capabilities" : [ "Shader" ],
          "extensions" : [ "SPV_AMD_shader_image_load_store_lod" ]
        },
        {
          "enumerant" : "SampleMaskOverrideCoverageNV",
          "value" : 5249,
          "capabilities" : [ "SampleRateShading" ],
          "extensions" : [ "SPV_NV_sample_mask_override_coverage" ]
        },
        {
          "enumerant" : "GeometryShaderPassthroughNV",
          "value" : 5251,
          "capabilities" : [ "Geometry" ],
          "extensions" : [ "SPV_NV_geometry_shader_passthrough" ]
        },
        {
          "enumerant" : "ShaderViewportIndexLayerEXT",
          "value" : 5254,
          "capabilities" : [ "MultiViewport" ],
          "extensions" : [ "SPV_EXT_shader_viewport_index_layer" ]
        },
        {
          "enumerant" : "ShaderViewportIndexLayerNV",
          "value" : 5254,
          "capabilities" : [ "MultiViewport" ],
          "extensions" : [ "SPV_NV_viewport_array2" ]
        },
        {
          "enumerant" : "ShaderViewportMaskNV",
          "value" : 5255,
          "capabilities" : [ "ShaderViewportIndexLayerNV" ],
          "extensions" : [ "SPV_NV_viewport_array2" ]
        },
        {
          "enumerant" : "ShaderStereoViewNV",
          "value" : 5259,
          "capabilities" : [ "ShaderViewportMaskNV" ],
          "extensions" : [ "SPV_NV_stereo_view_rendering" ]
        },
        {
          "enumerant" : "PerViewAttributesNV",
          "value" : 5260,
          "capabilities" : [ "MultiView" ],
          "extensions" : [ "SPV_NVX_multiview_per_view_attributes" ]
        }
      ]
    },
    {
      "category" : "Id",
      "kind" : "IdResultType",
      "doc" : "Reference to an <id> representing the result's type of the enclosing instruction"
    },
    {
      "category" : "Id",
      "kind" : "IdResult",
      "doc" : "Definition of an <id> representing the result of the enclosing instruction"
    },
    {
      "category" : "Id",
      "kind" : "IdMemorySemantics",
      "doc" : "Reference to an <id> representing a 32-bit integer that is a mask from the MemorySemantics operand kind"
    },
    {
      "category" : "Id",
      "kind" : "IdScope",
      "doc" : "Reference to an <id> representing a 32-bit integer that is a mask from the Scope operand kind"
    },
    {
      "category" : "Id",
      "kind" : "IdRef",
      "doc" : "Reference to an <id>"
    },
    {
      "category" : "Literal",
      "kind" : "LiteralInteger",
      "doc" : "An integer consuming one or more words"
    },
    {
      "category" : "Literal",
      "kind" : "LiteralString",
      "doc" : "A null-terminated stream of characters consuming an integral number of words"
    },
    {
      "category" : "Literal",
      "kind" : "LiteralContextDependentNumber",
      "doc" : "A literal number whose size and format are determined by a previous operand in the enclosing instruction"
    },
    {
      "category" : "Literal",
      "kind" : "LiteralExtInstInteger",
      "doc" : "A 32-bit unsigned integer indicating which instruction to use and determining the layout of following operands (for OpExtInst)"
    },
    {
      "category" : "Literal",
      "kind" : "LiteralSpecConstantOpInteger",
      "doc" : "An opcode indicating the operation to be performed and determining the layout of following operands (for OpSpecConstantOp)"
    },
    {
      "category" : "Composite",
      "kind" : "PairLiteralIntegerIdRef",
      "bases" : [ "LiteralInteger", "IdRef" ]
    },
    {
      "category" : "Composite",
      "kind" : "PairIdRefLiteralInteger",
      "bases" : [ "IdRef", "LiteralInteger" ]
    },
    {
      "category" : "Composite",
      "kind" : "PairIdRefIdRef",
      "bases" : [ "IdRef", "IdRef" ]
    }
  ]
};

export { SPIRVGrammar as default };
