module.exports = {
  dependency: {
    platforms: {
      android: {
        componentDescriptors: ['NFMaskedViewComponentDescriptor'],
        cmakeListsPath: 'build/generated/source/codegen/jni/CMakeLists.txt',
      },
    },
  },
};
