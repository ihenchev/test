<template>
    <div class="currency">
      <div class="currency__header">
        <div class="currency__logo">
          <div class="logo">
            <img :src="currency.icon" width="50" height="50">
          </div>
          <div class="currency-name">
            <div class="currency-name__short-name">{{currency.name}}</div>
            <div class="currency-name__full-name">{{currency.fullName}}</div>
          </div>
        </div>
      </div>
      <div class="currency_roi">roi<span>{{currency.roi}}</span></div>
      <div class="currency__value">
          <div class="currency__price">{{equivalent(currency.equivalent)}}
          </div>
          <div class="value">{{currency.value}}<span>{{currency.name}}</span></div>
        </div>
        
      <div class="price__info">
        <div class="per-day-amount">{{currency.dayAmount}}<span>usd/day</span></div>
      </div>
      <div class="percent-day" :class="getColor(currency.percent)">{{currency.percent}}%
        <span>
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.32843 0.646447C3.52369 0.451184 3.84027 0.451184 4.03553 0.646447L7.21751 3.82843C7.41278 4.02369 7.41278 4.34027 7.21751 4.53553C7.02225 4.7308 6.70567 4.7308 6.51041 4.53553L4.18198 2.20711V11.5H3.18198V2.20711L0.853553 4.53553C0.658291 4.7308 0.341709 4.7308 0.146447 4.53553C-0.0488155 4.34027 -0.0488155 4.02369 0.146447 3.82843L3.32843 0.646447Z" fill="#00D98B"/>
          </svg>
        </span>
      </div>
    </div>
</template>
<script>
export default {
  name: 'CardListItem',
  props:['currency'],
  methods:{
    equivalent(value){
      return (value.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '))
    },
    getColor: (num) => {
      return num > 0 ? "green" : "red";
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Vollkorn&display=swap');
  .currency
    padding 30px
    display grid
    grid-template-columns 2fr 1fr
    grid-template-rows 1fr 2fr 1fr
    background rgba(17, 26, 40, 0.85);
    backdrop-filter blur(15px);
  .currency__logo
    display grid
    grid-template-columns 57px 1fr
  .currency-name
    text-align left 
    margin-top 11px
    grid-row-gap 5px
    .currency-name__short-name
      font-family Vollkorn
      font-style normal
      font-weight bold
      font-size 16px
      line-height 14px
      text-transform uppercase
      color #fff
    .currency-name__full-name
      color rgba(255, 255, 255, 0.5)
      line-height: 22px;
  .currency_roi
    text-transform uppercase
    font-size 14px
    margin-top 11px
    text-align right 
    color rgba(255, 255, 255, 0.5)
    span
      color #fff
      margin-left 2px
  .logo
    text-align left 
  .currency__value
    grid-column 1/3
    display grid
    grid-template-rows: 2fr 1fr;
    text-align left 
  .currency__price
    font-weight bold
    color #fff
    font-size 24px
    line-height 33px
    position relative
    align-self: end;
    &:before
      content '\0024'
      font-size 18px
      line-height 25px
      margin-right: 3px  
  .value
    font-size 14px
    line-height 22px
    color #fff 
    text-align left  
    align-self end
    span
      margin-left 2px
      text-transform uppercase
      color rgba(255, 255, 255, 0.5)
  .price__info
    display grid
  
  .per-day-amount
    text-align left 
    align-self end
    font-size 14px
    text-transform uppercase
    color #fff
    span
      margin-left 3px
      color rgba(255, 255, 255, 0.5)
  .percent-day
    align-self end
    text-align right
    font-size 14px
    &.green
      color #00D98B
    &.red
      color red
      span svg
        transform rotate(180deg)
        path 
          fill red
  
</style>