'use client';

import {useTranslations} from 'next-intl';
import Header from '../../components/Header';
import LocaleSwitcher from '../../components/LocaleSwitcher';
import PageLayout from '../../components/PageLayout';
import Sidebar from '../../components/Sidebar';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <PageLayout title={t('title')}>
      
      <p>{t('description')}</p>
      <LocaleSwitcher />
    </PageLayout>
  );
}
