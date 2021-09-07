import Image from 'next/image';
import focoIcon from '../../public/assets/focoFeatures.svg';
import materialIcon from '../../public/assets/materialFeatures.svg';
import teamIcon from '../../public/assets/teamworkFeatures.svg';
import calendarIcon from '../../public/assets/calendarFeatures.svg';
import mapIcon from '../../public/assets/mapFeatures.svg';
import certificateIcon from '../../public/assets/certificateFeatures.svg';

export const data = [
    {   
        id: 1,
        img: focoIcon,
        title: 'Foco nos seus objetivos',
        text: 'Precisa de um intensivo de urgência para viagens? Nunca teve contato com a língua? Ou precisa de um aperfeiçoamento em conversação ou escrita? Na Hicham Idiomas, as aulas são personalizadas para a sua necessidade e seu nível de conhecimento da língua.'
    },
    {
        id: 2,
        img: materialIcon,
        title: 'Material didático moderno',
        text: 'Muito além dos livros! Aulas dinâmicas, com material multimídia: vídeos, quizzes, simulados, notícias e documentários.Exercícios bem selecionados e na medida certa vão manter seu aprendizado constante e garantir a sua imersão cultural na nova língua.'
    },
    {
        id: 3,
        img: teamIcon,
        title: 'Aulas individuais ou em grupo',
        text: 'Você escolhe! Aulas individuais personalizadas ou aulas para famílias, grupos de amigos ou profissionais. Tudo preparado de acordo com o nível do aluno ou do grupo e o propósito a que se destinam.'
    },
    {
        id: 4,
        img: calendarIcon,
        title: 'Horários flexíveis',
        text: 'Nossos pacotes oferecem a flexibilidade de horários para pessoas com diferentes disponibilidades de tempo. Escolha aquele que mais se ajusta à sua necessidade e à sua agenda e comece agora mesmo seus estudos!'
    },
    {
        id: 5,
        img: mapIcon,
        title: 'Localização de fácil acesso',
        text: 'A Hicham Idiomas está localizada no coração de Campinas, na avenida principal do centro. Fácil acesso de carro, transporte público ou até mesmo a pé. Em uma localização segura e movimentada, você não precisa se preocupar ao voltar para casa após uma aula noturna.'
    },
    {
        id: 6,
        img: certificateIcon,
        title: 'Certificados de conclusão',
        text: 'Celebre suas conquistas com orgulho! A cada nível que você completar do seu curso, a Hicham Idiomas emite um certificado de conclusão personalizado, para você anexar a seu currículo.'
    }
]