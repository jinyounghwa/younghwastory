/* eslint-disable */
import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const currentDay = new Date();
  const currentYear = currentDay.getFullYear();

  return (
    <div className="App">
      <header className="fixed inset-x-0 top-0 z-50 left-0 bg-white text-gray-700 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            {/* <img alt="logo" src={logo} className="w-8 h-8 -mr-1" /> */}
            <span className="ml-3 text-xl text-indigo-500">기획자 진영화의 개발이야기</span>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <div className="mr-5 hover:text-gray-900">
              About(준비중)
            </div>
            <div className="mr-5 hover:text-gray-900">
              JavaScript(준비중)
            </div>
            <div className="mr-5 hover:text-gray-900">
              Rust(준비중)
            </div>
          </nav>
        </div>
      </header>
      <section className="containe mb-9 mt-24"></section>
      <div className="container mx-auto my-8 max-w-2xl">
      <h1 className="text-4xl font-bold mb-4">기획자 진영화의 2023년 회고입니다.</h1>
      <p className="mb-4">안녕하세요 진영화입니다. 이제 기획자로 13년이 되었네요 </p>
      <p className="mb-4">13년이라.. 사실 그런건 중요하지 않습니다.</p>
      
      <p className="mb-4">저는 그냥 하루하루 주어진 대로 사는 사람이에요</p>
      
      <p className="mb-4">2023년 회고를 시작하겠습니다.</p>
      
      <p className="mb-4 font-bold">프론트엔드 개발자 가르치기 2년 과정 종료</p>
      
      <p className="mb-4">회사 퍼블리셔 동료를 웹의 기초에서부터 React까지 가르치는 2년여의 과정이 끝났습니다. 
        저는 먼저 퇴사하였지만, 다른 회사에서 근무하면서 그 친구의 퇴사날까지 개발공부는 물론 일부 회사 업무까지 어쩌다보니 해결해줬습니다. 
        바보같이 나간사람이 이전회사일까지 도와줘야 하냐고 하지만, 어쩔 수 없었습니다. 
        물어보는데 알아서 하라고 매몰차게 거절 할 수는 없잖아요?
      </p>
      <p className='mb-4'>가르치면서 얻은것은 나도 프론트엔드 부분에서는 에러를 해결할 수 있는 사람이 되었구나 라고 깨닫게 된 부분이 큽니다. 
      항상 튜토리얼만 하고 공부만 하는 사람에서 주어진 문제를 해결 할 수 있는 사람이 되었고, 
      그걸로 그 회사가 돈을 벌었다는 부분이 약간은 발전했다고 생각됩니다.</p>
      <p  className='mb-4'>
      가르치면서 잃어버린것은 시간이라고 생각합니다. 올해는 혼자서 하고 싶은 게 정말 많았어요.. 
      그 동안의 일기를 보면 벌써 Rust로 뭔가를 만들고 있었어야 합니다. 
      그러나 여러가지 이유로 하지 못했고 결과적으로 제가 못한거라고 생각합니다.
      </p>
      <p  className='mb-4'>
      처음에 개발을 가르치려고 했을 때, 2년이나 가르칠 줄은 전혀 몰랐어요 중간에 포기하지 않을까 
      생각하기도 했는데 생각보다 잘 마무리 했습니다. 물론, 가르치려고 했던 부분의 70% 정도만 완료한것 같습니다. 
      제가 전문 개발자도 아니고 이정도면 저의 역할을 잘 마무리 했다고 생각합니다. 
      솔직히 고민도 많았고, 몇번이나 포기하고 싶을 때도 있었지만 어른의 역할을 다하자는 생각과 지식을 전파하는 사람이 되어야 한다는 이상한 사명감이 있어서 포기하지 않고, 
      사고 없이 잘 마무리 할 수 있었던것 같습니다. 
      </p>
      <p  className='mb-4'>
      그렇지만, 제 자신을 챙기지는 못했군요.. 
      위에 작성한것에 이어서 쓰는 부분이지만 약간 이기적인 부분도 있었어야 한다고 생각합니다. 
      이 부분을 후회하고 있습니다. 조금 더 자신을 챙겼다면 어땠을까 라는 생각이 들었어요 올림픽 공원을 산책하면서 
      땅바닥을 보면서 가르치는 고민만 하다가 12월에 어느 날 고개를 들어 하늘을 보고 산책을 하니 하늘이 이렇게 
      파란색이었네.. 라는 생각이 들었네요..
      </p>
      <p className='mb-4 font-bold'>
      회사 일
      </p>
      <p className='mb-4'>
      회사일은 정말 몸이 부셔져라 했습니다. 
      저번회사의 사람들은 어떻게 생각할지는 모르지만 주말과 휴일에 다 나오고 출장과 야근에.. 
      면접때 들었던 이야기와는 다르게 사람을 갈아 마시는 회사에만 가는지 스스로에게 궁금하지만, 
      운명이라 받아들여야 할지도 모르겠습니다.
      </p>
      <p className='mb-4 font-bold'>
      공부
      </p>
      <p className='mb-4'>
      저도 이제는 방향을 결정해야 할 것 같아요 앞으로 개발 공부는 JavaScript, Swift, Rust 로 확정하게 될것 같습니다. 그 동안 맛을 봤던 Kotlin(android)는 더 이상 공부를 하지 않을것 같습니다. 자동차관련 네이티브 앱을 기획했던 과정에서 안드로이드는 저에게 맞지 않는다는 생각이 들었습니다. 개인적 취향인것 같아요.. Swift 는 2개월째 공부하고 있습니다. iOS공부해서 선수로 뛰겠다는 것은 아닙니다. 저도 13년이나 여기 있었는데 필드에서 Swift UI 만 공부해서는 불가하다는 누구보다 잘 압니다. 선수로 뛰지 않겠다는것이지, 제가 구단주를 하지 말라는 법은 없기 때문에 공부하는것이라고 생각합니다.
      </p>
      <p className='mb-4 font-bold'>
      취미
      </p>
      <p className='mb-4'>
      물론 JAVA는 그냥 깊게 공부하지 않고 예제를 따라치는걸로만 할 예정입니다. 지금 구입한 교재 및 동영상 강의를 마지막으로 앞으로 아예 책도 안살겁니다. 일요일 아침에 그냥 취미삼아 예제만 따라 할 예정입니다. 
      </p>
      <p className='mb-4 font-bold'>
      다른 방향도 한번 둘러보기
      </p>
      <p className='mb-4'>
      제가 존경하는 개발자인 TJ HOLOWAYCHUK 의 말 처럼 가장 중요한건 시간이고 개발 외 다른것이 중요할 수 있다는 말을 듣고 많은 고민을 하게 되었습니다. 공부는 계속 할 예정이지만, 2024년에는 다른 길도 고민해보는 시간이 될 수 있을 것 같습니다. Swift를 배우는 것도 새로운 시각에 대한 갈망이 있었지만, 제 인생 전체도 이런식으로 고민해봐야 할 시기인것 같아요 무엇을 할지는 모르겠지만, 음향을 공부할 수 있고 뜬금없이 도자기를 공부할 수 있을것 같아요 어쩌면 TJ처럼 대부분의 시간을 다른 일로 보내고 특별한 일이 아니면 하루에 약간의 시간만 코딩하고 주어진 시간을 다른 데 사용하는, 인생의 다른영역을 생각해보는 삶을 고민해볼 생각입니다.
      </p>
      <p className='mb-4 font-bold'>
      2023년의 책 
      </p>
      <p className='mb-4'>
      가장 좋았던 책은 <b>한입크기로 잘라먹는 리액트 였습니다.</b> 이 책 많큼 친절한 책은 없었습니다. 자세하게 설명한 책으로 리액트를 처음 시작한 사람에게 강력하게 추천합니다.

가장 나빴던 책은  <b>타입스크립트 리액트 Next.js로 배우는 실전 웹 애플리케이션 개발</b>입니다. 책의 예제를 시작조차 할 수 없었던 최초의 책이었습니다. 또한 이 책을 읽으면서 아마도 atomic design은 내 사전에 없다고 생각할것 같아요 UI를 나누는 것도 적당히 나누어야 한다고 생각했습니다.
      </p>
      <p className='mb-4 font-bold'>
      2024년의 삶
      </p>
      <p className='mb-4'>
      내년에는 먼저 스스로를 챙기는 1년으로 생각할 것입니다. 일요일에는 나만을 위해 사용하는 시간을 가지도록 무언가를 하거나 여행이라도 짧게 다녀오려고 합니다. 여행은 미션을 수행하는 방식의 여행이 아닌 그냥 돌아다니면서 녹음기 달고 소리를 수집해서 들어보는 여행을 할지도 모르겠네요      </p>
      <p className='mb-4'>
      그리고 코딩공부 하면서 1년짜리 장기 유지보수 프로젝트 1개와 10년짜리 프로젝트 1개를 진행할 예정입니다. 10년짜리는 정해졌는데 1년짜리는 아직 정해진 게 없군요.. 그냥 작게 시작하고 서버도 Firebase만 사용해서 저비용의 미션을 진행할것 같습니다.
      </p>
      <p className='mb-4'>
      마지막으로 조금 더 자주 연락 할 수 있는 소규모 친목관계를 만들던지, 아니면 제가 그런곳을 찾아 다니던지 시도를 해볼 생각입니다.
      </p>
      <p className='mb-4'>
      소원이 있다면, 이번에는 좋은 사람들과 좋은 회사에서 평일에 열심히 일하고 퇴근이나 휴일에는 저를 챙길 수 있는 곳으로 가는것을 소망하고 있습니다. 더는 무례한 사람이나, 사람을 갈아 마시는 회사에서 업무가 가능할 정도로 젊지 않다는 것을 잘 알고 있기 때문입니다. 이제는 트로피처럼 새로운 분야에 대한 도전이 필요가 없을 정도로 다양한 분야에서 일해 봤고 (블록체인, 쇼핑몰, 스타트업, VR/AR, 포탈서비스 그리고 자동차까지) 모험을 하는건 위험하다 생각합니다. 그러니 그동안 쌓은 경험을 잘 발휘할 수 있는곳이면 좋겠습니다. 이런걸 허락 할 수 없다면, 단기적으로만 일하고 싶습니다. 
      </p>
      <p className='mb-4 font-bold'>
      이 글을 읽는 분들에게 
      </p>
      <p className='mb-4'>
      맞춤법이 틀린 부분도 있을 수 있는 글을 읽어 주셔서 감사합니다. 다만, 맥락상 이상한 부분은 없을것 같으니 맞춤법 지적은 받지 않겠습니다. 이 글을 읽어주시는 분들은 어떻게든 저를 조금이라도 알고 있는 분들일 가능성이 많다는 가정하에 모두 내년에도 행복하고 좋은 시간을 보내시길 바랍니다. 저는 내년에는 스스로를 챙기면서 더 많이 시도하고 실패하고 노력하는것을 반복할것입니다. 누군가와 싸워 이긴다는 생각보다는 하고싶은것을 작게나마 이루겠다는 생각을 하면서 저도 최대한 행복해보려 노력하겠습니다. 여러분 모두 내년에도 행복하시길 빌며 어디서든, 어떤곳이든 저를 만나서 인사해주시면 저도 반갑게 인사하도록 하겠습니다. 감사합니다.
      </p>
      </div>
      <footer className="text-gray-700 body-font">
        <div className="bg-gray-200">
          <div className="container mx-auto pt-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {currentYear} 진영화
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              timotolkie@gmail.com
            </span>
          </div>
          <div className="container mx-auto pb-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              기획/디자인/개발/컨텐츠 진영화
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;