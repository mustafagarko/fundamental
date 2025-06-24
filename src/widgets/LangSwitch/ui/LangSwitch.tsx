import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitchProps {
    className?: string;
    collapsed: boolean
}

export const LangSwitch: FC<LangSwitchProps> = memo(({ className, collapsed }: LangSwitchProps) => {
    const { t, i18n } = useTranslation();
    function switchLang() {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    }
    return (
        <Button theme={ThemeButton.PRIMARY_INVERTED} onClick={switchLang}>
            {t(collapsed ? 'LangShort' : 'Language')}
        </Button>
    );
});
