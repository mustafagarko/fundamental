// /* eslint-disable max-len */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
    rules: {
        // отступы для JSX
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        // отступы для остальных файлов
        indent: [2, 4],
        // использование jsx в файлах с расширением
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        // чтобы не ругался на абсолютные пути
        'import/no-unresolved': 'off',
        // чтобы не ругался на именованные экспорты
        'import/prefer-default-export': 'off',
        // чтобы выкидывал предупреждение вместо ошибки при неиспользуемых переменных
        'no-unused-vars': 'warn',
        // чтобы не ругался на отсутствие дефолтных значений для пропсов
        'react/require-default-props': 'off',
        // чтобы не ругался на отсутствие импорта React в компонент. можно отключать,
        // если версия реакта >= 17
        'react/react-in-jsx-scope': 'off',
        // чтобы выкидывал предупреждение вместо ошибки при props spreading (...props)
        // можем применяь в редких случаях, например в ui компонентах
        'react/jsx-props-no-spreading': 'warn',
        /// чтобы не ругался на стрелочные функции в компонентах
        'react/function-component-definition': 'off',
        // чтобы не ругался на enum
        'no-shadow': 'off',
        // чтобы не ругался на переданные в пропсы функции
        'react/jsx-no-bind': 'off',
        // чтобы не ругался на отсутствие расширения в пути до файла. настроено в webpack конфиге
        'import/extensions': 'off',
        // чтобы не ругался на импорт дев зависимостей (варнинг вместо ошибок). для файлов сборки это норм
        'import/no-extraneous-dependencies': 'warn',
        // чтобы не ругался на переданный в пропс объект, который будет вызывать ререндер
        'react/jsx-no-constructed-context-values': 'warn',
        // чтобы не ругался на нижние подчеркивания в перемменных. будем их использовать для глобальных
        'no-underscore-dangle': 'off',
        'no-tabs': 0,
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['to', 'fallback', 'data-testid'],
            },
        ],
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'linebreak-style': 0,

    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
