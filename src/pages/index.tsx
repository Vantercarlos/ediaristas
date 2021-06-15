import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from 'ui/styles/pages/index.style';
import useIndex from 'data/hooks/pages/useIndex.page';

export default function Home() {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  } = useIndex();
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'} 
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />

      <FormElementsContainer>
          <TextFieldMask
              mask={'99.999-999'}
              label={'Digite seu CEP'}
              fullWidth
              variant={'outlined'}
              value={cep}
              onChange={(event) => setCep(event.target.value)}
          />
          {erro && <Typography color={'error'}>{erro}</Typography>}
          <Button
              variant={'contained'}
              color={'secondary'}
              sx={{ width: '220px' }}
              disabled={!cepValido || carregando}
              onClick={() => buscarProfissionais(cep)}
          >
              {carregando ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
      </FormElementsContainer>

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
