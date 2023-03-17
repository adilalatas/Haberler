
import { useTranslation } from 'react-i18next';
export default function Politics(props) {
    const { t, i18n } = useTranslation();
  return (
    <div className='text-center'>
         <h1>{t(props.pages)}</h1>
    </div>
  )
}
