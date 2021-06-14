import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';


export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'} 
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />

      <UserInformation 
          name={'Vantercarlos'}
          picture={'https://github.com/Vantercarlos.png'}
          rating={3}
          description={'Boa Vista - RR'}
      />

      <UserInformation 
          name={'Vantercarlos'}
          picture={'https://github.com/Vantercarlos.png'}
          rating={3}
          description={'Boa Vista - RR'}
      />
    </div>
  )
}
