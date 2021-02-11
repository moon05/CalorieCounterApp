import React from 'react'
import { View } from 'react-native'

import { VictoryPie, VictoryLegend, VictoryTheme } from 'victory-native'

// default heightPie should be 250

export const CustomPieChart = ({ data, xAccessor, yAccessor, colorArrayPie, colorArrayLegend, heightPie, gutterLegend, heightLegend, legendTitle }) => {
  const legendData = []
  for (const [index, value] of data.entries()) {
    if (value[xAccessor] === 'None') {

    } else {
      legendData.push({
        name: `${value[xAccessor]}\n${data[index][yAccessor]}`,
        symbol: { fill: colorArrayLegend[index], type: 'square' }
      })
    }
  }
  return (

        <View flexDirection = "column" justifyContent = "flex-start" alignItems = "center" backgroundColor={'#f5fcff'}>
            <VictoryPie
                animate={{ duration: 500 }}
                colorScale={colorArrayPie}
                data={data} x={xAccessor} y={yAccessor}
                height={heightPie}
                theme={VictoryTheme.material}
                labels={() => null}
            />
            <VictoryLegend x={80}
                           title={legendTitle}
                           centerTitle
                           orientation="horizontal"
                           gutter={gutterLegend}
                           itemsPerRow={2}
                           height={heightLegend}
                           style={{ data: { size: 10 }, title: { fontSize: 20 } }}
                           data={legendData}
            />
        </View>

  )
}
