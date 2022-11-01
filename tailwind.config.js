/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        '15':'10%',
        '75':'90%',
        "34":'40rem',
        '55':'52%'
        ,'48':'48%'
        ,'25':'25%'
        ,'21':'55rem',
        '70':'93%'

      },
      width:{
        '50':'50%'
        ,'12':'6%'
        ,'82':'94%',
        '75':'75%',
        '30':'30%',
        '90': '90%',
        '40': '49%',
        '60': '75%',
        '21': '25%',
        '17': '35%',
        '88': '88%',

      },
      fontSize:{
        ext:'5px'
      },
      backgroundImage:{
        'Banner':'url("../public/images/住宅用クッションフロア｜柄合わせ不要で使いやすい｜東リ｜CF9463｜CFシート-H｜2024年まで継続｜柄マッチ不要.jpg")'
      }
    },
  },
  plugins: [],
}
