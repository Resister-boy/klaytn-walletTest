# blockchainAppDebv

components
 - BoardPost : 게시글 목록 사용할 컴포넌트 생성
 - Container : container 생성 후 index board에 적용
 - Nev : nevigation 쪽 로고 이미지, NFT World 등 metadataa 출력 바
 - PostList : Home 밑 게시물 리스트 출력
data 
 - metadata : NFT World 등 data 정보 기입
 - navlinks : /, /board page 


pages
 - index : Home에 home img와 meta data에 기입한 title 정보 출력 
pages > board
 -  [slug] : posts 폴더에 있는 mdx 출력 slug -> first 나 second로 변경됨

posts
 - first / second : 임의로 넣어둔 data 값 추후 삭제해야함

public
 - home : 홈페이지 메인 이미지
 - logo : NFT World 옆 로고 이미지
 - example : first 페이지 안에 넣어둔 이미지


yarn install or npm install 

yarn dev or npm run dev