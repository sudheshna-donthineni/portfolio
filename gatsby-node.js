exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === 'build-html') {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /scrollreveal/,
              use: loaders.null(),
            },
            {
              test: /animejs/,
              use: loaders.null(),
            },
          ],
        },
      });
    }
  };