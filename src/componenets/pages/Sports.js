
import { useTranslation } from 'react-i18next';
export default function Sports(props) {
    const { t, } = useTranslation();
  return (
    <div className='text-center'>
        <h1>{t(props.pages)}</h1>
    </div>
  )
}