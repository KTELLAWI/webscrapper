import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

function LanguageSwitcher() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng)
  }
  return (
    <div>
      <button type="button" onClick={() => changeLanguage('en')}>
        {t('common:english')}
      </button>
      <button type="button" onClick={() => changeLanguage('fr')}>
        {t('common:french')}
      </button>
      
    </div>
  )
}

export default LanguageSwitcher
