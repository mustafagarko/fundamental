import { WebpackConfiguration } from 'webpack-dev-server';
import path from 'path';
import { DefinePlugin, RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }:{config: WebpackConfiguration}) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    config!.module!.rules!.push(buildCssLoader(true));

    const rules = config.module!.rules as RuleSetRule[];
    config.module!.rules = rules.map((rule) => (
        /svg/.test(rule.test as string)
            ? { ...rule, exclude: /\.svg$/i }
            : rule
    ));
    config!.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: true,
        __API__: '',
    }));
    return config;
};
