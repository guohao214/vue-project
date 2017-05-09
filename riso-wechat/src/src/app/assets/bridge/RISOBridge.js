import {isIOS} from '../../../../util/checkos';

let RISOBridgeStatus = false;

export let RISOBridge = {
  // 快速登录
  quickLogin: function ($params = {}, $callback) {
    loadMethod('RisoWebActivity', 'quickLogin', $params, $callback)
  },

  // 展示购物车
  /**
   *
   * @param $params  { showStatus: 1} ，0为隐藏， 1为显示
   * @param $callback
   */
  showShareShoppingCar: function ($params, $callback) {
    loadMethod('RisoWebActivity', 'showShareShoppingCar', $params, $callback)
  },

  // 跳转到商品详情页面
  /**
   * 0302 与 其他的展示页面不一样
   * { productType ：BL0302 || BL0301,  'productId': 333}
   * @param $params
   * @param $callback
   */
  jumpCommodityDetails: function ($params, $callback) {
    loadMethod('RisoWebActivity', 'jumpCommodityDetails', $params, $callback)
  },

  // 添加到购物车
  /**
   * spuId: '04e457212be24c93b01cbd9753350a5b',
   * quantity: 1  添加数量
   * @param $params
   * @param $callback
   */
  addCommodityInShoppingCar: function ($params, $callback) {
    loadMethod('RisoWebActivity', 'addCommodityInShoppingCar', $params, $callback)
  },

  // 返回购物车中指定商品数量
  /**
   * spuId: '04e457212be24c93b01cbd9753350a5b',
   * @param $params
   * @param $callback
   */
  // showCommodcityNumber: function ($params, $callback) {
  //   loadMethod('RisoWebActivity', 'showCommodcityNumber', $params, $callback)
  // },

  //跳转到订单确认页面
  // jumpCommodityTrue: function ($params, $callback) {
  //   loadMethod('RisoWebActivity', 'jumpCommodityTrue', $params, $callback)
  // },

  // 获取设备信息接口
  // 返回信息
  /**
   * {
	      os: 'ios',
	      deviceId: 'xxx',     // 唯一识别码
	      deviceName: ''       // 手机型号
   *   }
   * @param $params
   * @param $callback
   */
  getDeviceNumber: function ($params, $callback) {
    loadMethod('RisoWebActivity', 'getDeviceNumber', $params, $callback)
  },

  // 修改导航栏Title
  /**
   * title 标题
   * @param $params
   * @param $callback
   */
  setToolBarTitle: function ($params, $callback) {
    loadMethod('RisoWebActivity', 'setToolBarTitle', $params, $callback)
  },

  // 隐藏|| 显示 App Loading框
  /**
   * {showStatus : 0} 0为隐藏， 1为显示
   * @param $params
   * @param $callback
   */
  setLoadingStatus: function ($params, $callback) {
    loadMethod('RisoWebActivity', 'setLoadingStatus', $params, $callback)
  },

  // 跳转到搜索结果页面
  /**
   * keywords  关键字
   * @param $params
   * @param $callback
   */
  jumpSearch: function ($params, $callback) {
    loadMethod('RisoWebActivity', 'jumpSearch', $params, $callback)
  }
}

/**
 * 加载api
 * @param $apiName
 * @param $params
 * @param $callback
 */
function loadApi($apiName, $params, $callback) {
  if (!RISOBridgeStatus)
    return;

  try {
    window.CTJSBridge.LoadAPI($apiName, $params, $callback)
  } catch (e) {

  }
}

/**
 * 加载method
 * @param $targetName
 * @param $methodName
 * @param $params
 * @param $callback
 */
function loadMethod($targetName, $methodName, $params, $callback) {
  if (!RISOBridgeStatus)
    return;

  try {
    window.CTJSBridge.LoadMethod($targetName, $methodName, $params, $callback)
  } catch (e) {
  }
}

export function RISOBridgeInit($callback) {

  let $CB = function () {
    RISOBridgeStatus = true;

    if (typeof $callback === 'function')
      $callback.call(null)
  }

  if (isIOS) {
    let $loop = setInterval(function () {
      if (window.CTJSBridge && window.CTJSBridge.LoadMethod && window.CTJSBridge.LoadAPI) {
        $CB();
        clearInterval($loop);
      }
    }, 200)
  } else {
    document.addEventListener('BLBridgeReady', function () {
      $CB();
    })
  }
}

export default RISOBridge;
