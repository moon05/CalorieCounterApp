import React from 'react'
import { View } from 'react-native'

import { VictoryPie, VictoryLegend, VictoryTheme } from 'victory-native'

// default heightPie should be 250

export const ProgressScreen = ({ data, xAccessor, yAccessor, colorArray, heightPie, gutterLegend, heightLegend }) => {
  const legendData = []
  for (const [index, value] of data.entries()) {
    legendData.push({ name: value.period, symbol: { fill: colorArray[index], type: 'square' } })
  }
  return (

        <View flexDirection = "column" justifyContent = "flex-start" alignItems = "center" backgroundColor={'#f5fcff'}>
            <VictoryPie
                animate={{ duration: 500 }}
                colorScale={colorArray}
                data={data} x={xAccessor} y={yAccessor}
                height={heightPie}
                theme={VictoryTheme.material}
                labels={() => null}
            />
            <VictoryLegend x={80}
                           title="Legend"
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
