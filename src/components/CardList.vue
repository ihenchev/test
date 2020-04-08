<template>
  <div class="card-list">
      <CardListItem v-for="(currency, name) in currencies" :key="name" :currency="currency"></CardListItem>
  </div>
</template>

<script>
import CardListItem from '@/components/CardListItem.vue'
export default {
  name: 'CardList',
  data:() =>({
		currencies:[
      {
        name: 'Dash',
        fullName: 'Dash',
        value: '17.55',
        equivalent: '1183.74',
        roi: '75%',
        dayAmount: '0.75',
        percent: '+4.43',
        icon: '../img/dash.svg'
      },
      {
        name: 'BCH',
        fullName: 'Bitcoin cash',
        value: '1.55',
        equivalent: '183.74',
        roi: '45%',
        dayAmount: '2.01',
        percent: '-1.43',
        icon: '../img/dash.svg'
      },
      {
        name: 'ETH',
        fullName: 'Ethereum',
        value: '0.55',
        equivalent: '83.74',
        roi: '56%',
        dayAmount: '3.55',
        percent: '+0.43',
        icon: '../img/dash.svg'
      },
      {
        name: 'BSV',
        fullName: 'Bitcoin SV',
        value: '1.00',
        equivalent: '208.49',
        roi: '56%',
        dayAmount: '0.22',
        percent: '+0.43',
        icon: '../img/dash.svg'
      }
    ]

	}),
  components: {
    CardListItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.card-list 
  display grid
  grid-template-columns repeat(auto-fill, 251px)
  grid-auto-rows 268px
  grid-gap 30px
  border 1px solid red
  padding 30px
  background #090C13
</style>
