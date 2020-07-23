var myChart = echarts.init(document.getElementById("app"))
myChart.setOption({
  series: [{
    type: "map",
    map: "china"
  }]
})
var name_title = "中国人民大学2017年各省市计划录取人数"
var subname = "数据爬取自千栀网\n，\n上海、浙江无文理科录取人数"
var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = "等线"
var subname_fontSize = 15
var name_fontSize = 18
var mapName = "china"
var data = [
  { name: "北京", value: 177 },
  { name: "天津", value: 42 },
  { name: "河北", value: 102 },
  { name: "山西", value: 81 },
  { name: "内蒙古", value: 47 },
  { name: "辽宁", value: 67 },
  { name: "吉林", value: 82 },
  { name: "黑龙江", value: 66 },
  { name: "上海", value: 24 },
  { name: "江苏", value: 92 },
  { name: "浙江", value: 114 },
  { name: "安徽", value: 109 },
  { name: "福建", value: 116 },
  { name: "江西", value: 91 },
  { name: "山东", value: 119 },
  { name: "河南", value: 137 },
  { name: "湖北", value: 116 },
  { name: "湖南", value: 114 },
  { name: "重庆", value: 91 },
  { name: "四川", value: 125 },
  { name: "贵州", value: 62 },
  { name: "云南", value: 83 },
  { name: "西藏", value: 9 },
  { name: "陕西", value: 80 },
  { name: "甘肃", value: 56 },
  { name: "青海", value: 10 },
  { name: "宁夏", value: 18 },
  { name: "新疆", value: 67 },
  { name: "广东", value: 123 },
  { name: "广西", value: 59 },
  { name: "海南", value: 14 }
]

var geoCoordMap = {}
var toolTipData = [
  { name: "北京", value: [{ name: "文科", value: 95 }, { name: "理科", value: 82 }] },
  { name: "天津", value: [{ name: "文科", value: 22 }, { name: "理科", value: 20 }] },
  { name: "河北", value: [{ name: "文科", value: 60 }, { name: "理科", value: 42 }] },
  { name: "山西", value: [{ name: "文科", value: 40 }, { name: "理科", value: 41 }] },
  { name: "内蒙古", value: [{ name: "文科", value: 23 }, { name: "理科", value: 24 }] },
  { name: "辽宁", value: [{ name: "文科", value: 39 }, { name: "理科", value: 28 }] },
  { name: "吉林", value: [{ name: "文科", value: 41 }, { name: "理科", value: 41 }] },
  { name: "黑龙江", value: [{ name: "文科", value: 35 }, { name: "理科", value: 31 }] },
  { name: "上海", value: [{ name: "文科", value: 12 }, { name: "理科", value: 12 }] },
  { name: "江苏", value: [{ name: "文科", value: 47 }, { name: "理科", value: 45 }] },
  { name: "浙江", value: [{ name: "文科", value: 57 }, { name: "理科", value: 57 }] },
  { name: "安徽", value: [{ name: "文科", value: 57 }, { name: "理科", value: 52 }] },
  { name: "福建", value: [{ name: "文科", value: 59 }, { name: "理科", value: 57 }] },
  { name: "江西", value: [{ name: "文科", value: 49 }, { name: "理科", value: 42 }] },
  { name: "山东", value: [{ name: "文科", value: 67 }, { name: "理科", value: 52 }] },
  { name: "河南", value: [{ name: "文科", value: 69 }, { name: "理科", value: 68 }] },
  { name: "湖北", value: [{ name: "文科", value: 60 }, { name: "理科", value: 56 }] },
  { name: "湖南", value: [{ name: "文科", value: 62 }, { name: "理科", value: 52 }] },
  { name: "重庆", value: [{ name: "文科", value: 47 }, { name: "理科", value: 44 }] },
  { name: "四川", value: [{ name: "文科", value: 65 }, { name: "理科", value: 60 }] },
  { name: "贵州", value: [{ name: "文科", value: 32 }, { name: "理科", value: 30 }] },
  { name: "云南", value: [{ name: "文科", value: 42 }, { name: "理科", value: 41 }] },
  { name: "西藏", value: [{ name: "文科", value: 5 }, { name: "理科", value: 4 }] },
  { name: "陕西", value: [{ name: "文科", value: 38 }, { name: "理科", value: 42 }] },
  { name: "甘肃", value: [{ name: "文科", value: 28 }, { name: "理科", value: 28 }] },
  { name: "青海", value: [{ name: "文科", value: 5 }, { name: "理科", value: 5 }] },
  { name: "宁夏", value: [{ name: "文科", value: 10 }, { name: "理科", value: 8 }] },
  { name: "新疆", value: [{ name: "文科", value: 36 }, { name: "理科", value: 31 }] },
  { name: "广东", value: [{ name: "文科", value: 63 }, { name: "理科", value: 60 }] },
  { name: "广西", value: [{ name: "文科", value: 29 }, { name: "理科", value: 30 }] },
  { name: "海南", value: [{ name: "文科", value: 8 }, { name: "理科", value: 6 }] }
]

/*获取地图数据*/
myChart.showLoading()
var mapFeatures = echarts.getMap(mapName).geoJson.features
myChart.hideLoading()
mapFeatures.forEach(function (v) {
  // 地区名称
  var name = v.properties.name
  // 地区经纬度
  geoCoordMap[name] = v.properties.cp

})

// console.log("============geoCoordMap===================")
// console.log(geoCoordMap)
// console.log("================data======================")
console.log(data)
console.log(toolTipData)
var max = 480,
  min = 9 // todo
var maxSize4Pin = 100,
  minSize4Pin = 20

var convertData = function (data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}

console.log(convertData(data))

option = {
  title: {
    text: name_title,
    subtext: subname,
    x: "center",
    textStyle: {
      color: nameColor,
      fontFamily: name_fontFamily,
      fontSize: name_fontSize
    },
    subtextStyle: {
      fontSize: subname_fontSize,
      fontFamily: name_fontFamily
    }
  },
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      if (typeof (params.value)[2] == "undefined") {
        var toolTiphtml = ""
        for (var i = 0; i < toolTipData.length; i++) {
          if (params.name == toolTipData[i].name) {
            toolTiphtml += toolTipData[i].name + ":<br>"
            for (var j = 0; j < toolTipData[i].value.length; j++) {
              toolTiphtml += toolTipData[i].value[j].name + ":" + toolTipData[i].value[j].value + "<br>"
            }
          }
        }
        return toolTiphtml
      } else {
        var toolTiphtml = ""
        for (var i = 0; i < toolTipData.length; i++) {
          if (params.name == toolTipData[i].name) {
            toolTiphtml += toolTipData[i].name + ":<br>"
            for (var j = 0; j < toolTipData[i].value.length; j++) {
              toolTiphtml += toolTipData[i].value[j].name + ":" + toolTipData[i].value[j].value + "<br>"
            }
          }
        }
        return toolTiphtml
      }
    }
  },
  visualMap: {
    show: true,
    min: 0,
    max: 200,
    left: "left",
    top: "bottom",
    text: ["高", "低"], // 文本，默认为数值文本
    calculable: true,
    seriesIndex: [1],
    inRange: {
      color: ["#00467F", "#A5CC82"] // 蓝绿
    }
  },
  geo: {
    show: true,
    map: mapName,
    label: {
      normal: {
        show: false
      },
      emphasis: {
        show: false
      }
    },
    roam: true,
    itemStyle: {
      normal: {
        areaColor: "#031525",
        borderColor: "#3B5077"
      },
      emphasis: {
        areaColor: "#2B91B7"
      }
    }
  },
  series: [
    {
      name: "散点",
      type: "scatter",
      coordinateSystem: "geo",
      data: convertData(data),
      symbol: `path://M0 0h10v50h-10z`,
      label: {
        normal: {
          formatter: "{b}",
          position: "right",
          show: true
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: "#05C3F9"
        }
      }
    },
    {
      type: "map",
      map: mapName,
      geoIndex: 0,
      aspectScale: 0.75, //长宽比
      showLegendSymbol: false, // 存在legend时显示
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: false,
          textStyle: {
            color: "#fff"
          }
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: "#031525",
          borderColor: "#3B5077"
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      },
      animation: false,
      data: data
    }
  ]
}

myChart.setOption(option)
