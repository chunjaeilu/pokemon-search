const pokemons = [
  {
    name: "이상해씨",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png",
    type: ["풀", "독"],
    desc: "태어나서부터 얼마 동안은 등의 씨앗으로부터 영양을 공급받아 크게 성장한다.",
  },
  {
    name: "파이리",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000401.png",
    type: ["불꽃"],
    desc: "파이리 꼬리의 불꽃은 생명의 등불이다. 건강할 때는 불꽃도 강하게 타오른다.",
  },
  {
    name: "꼬부기",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000701.png",
    type: ["물"],
    desc: "등껍질에 숨어 몸을 보호한다. 상대의 빈틈을 놓치지 않고 물을 뿜어내어 반격한다.",
  },
  {
    name: "피카츄",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002501.png",
    type: ["전기"],
    desc: "숲속에서 동료와 산다. 볼의 양쪽에 있는 전기 주머니에 전기를 모아 둔다.",
  },
  {
    name: "캐터피",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001001.png",
    type: ["벌레"],
    desc: "빨간 더듬이로부터 냄새를 내어 상대를 쫓아 버린다. 탈피를 반복하여 자라난다.",
  },
  {
    name: "뿔충이",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001301.png",
    type: ["벌레", "독"],
    desc: "매일 자신과 똑같은 무게의 잎사귀를 먹는다. 머리의 침으로 달려드는 상대를 물리친다.",
  },
  {
    name: "구구",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001601.png",
    type: ["노말", "비행"],
    desc: "싸움을 좋아하지 않는 얌전한 성격이지만 어설프게 건드리면 강력한 반격을 당하게 된다.",
  },
  {
    name: "아보",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002301.png",
    type: ["독"],
    desc: "소리를 전혀 내지 않고 풀밭 속을 나아간다. 방심하고 있는 먹이를 배후에서 덮친다.",
  },
  {
    name: "삐삐",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003501.png",
    type: ["페어리"],
    desc: "귀여운 표정과 동작으로 인기가 많다. 조용한 산속에서 동료들과 사는 것으로 여겨지고 있다.",
  },
  {
    name: "식스테일",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003701.png",
    type: ["불꽃"],
    desc: "불꽃의 구슬을 조종한다. 성장하면 6개의 꼬리는 끝이 갈라져서 한층 더 늘어난다.",
  },
  {
    name: "뚜벅초",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/004301.png",
    type: ["풀", "독"],
    desc: "낮에는 뿌리인 발을 땅에 박고 움직이지 않을 때가 많다. 밤에 돌아다니며 씨를 뿌린다.",
  },
  {
    name: "나옹",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005201.png",
    type: ["노말"],
    desc: "한밤중에 움직이는 습성이 있다. 반짝반짝 빛나는 것을 발견하면 그에 못지않게 눈동자가 반짝인다.",
  },
  {
    name: "고라파덕",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005401.png",
    type: ["물"],
    desc: "두통이 심해지면 이상한 힘을 사용하게 된다. 그때의 일은 기억하지 못한다.",
  },
  {
    name: "슈륙챙이",
    imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006101.png",
    type: ["물"],
    desc: "배의 소용돌이는 미묘하게 꾸불거리므로 바라보고 있으면 점점 잠이 오게 된다.",
  },
];

// 분리한 모듈 출력하기
// module.exports = data1, data2, ...;
module.exports = pokemons;
