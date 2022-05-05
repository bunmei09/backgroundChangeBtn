const body:HTMLElement = document.getElementsByTagName('body')[0]
const Palette: HTMLElement = document.querySelector(".skin-palette")!;

const colorItems = [
  "linear-gradient(220.55deg, #A531DC 0%, #4300B1 100%)", //紫
  "linear-gradient(220.55deg, #FF896D 0%, #D02020 100%)", //朱
  "linear-gradient(220.55deg, #3793FF 0%, #0017E4 100%)", //青
  "linear-gradient(220.55deg, #FFD439 0%, #FF7A00 100%)", // オレンジ
  "linear-gradient(220.55deg, #7CF7FF 0%, #4B73FF 100%)", //水色
  "linear-gradient(220.55deg, #FFED46 0%, #FF7EC7 100%)", //桃
  "linear-gradient(220.55deg, #8FFF85 0%, #39A0FF 100%)", //ミント
  "linear-gradient(220.55deg, #8A88FB 0%, #D079EE 100%)", //クリーム
  "linear-gradient(220.55deg, #EAEAEA 0%, #8B8B8B 100%)", //グレー
  "linear-gradient(220.55deg, #FFEB3A 0%, #4DEF8E 100%)", //黄緑
  "linear-gradient(220.55deg, #565656 0%, #181818 100%)", // 黒
  "linear-gradient(220.55deg, #FFEAF6 0%, #FF9DE4 100%)", // ピンク
];

colorItems.forEach((color) => {
  const item: HTMLElement = document.createElement('div')
  item.className = "skin-palette-item"
item.style.background = color
  Palette.appendChild(item)
})

const items = [...document.querySelectorAll(".skin-palette-item")];

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', () => {
    bodyBackgroundChange(colorItems[i])
  })
}

const bodyBackgroundChange = (target: string):void => {
  body.style.background = target
}

console.log('test')

console.log('編集五回目')