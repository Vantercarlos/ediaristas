import Head from 'next/head'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'


export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'} 
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />
    </div>
  )
}
