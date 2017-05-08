import {isIOS} from '../../../../util/checkos';

let RISOBridgeStatus = false;

export let RISOBridge = {
  // 快速登录
  quickLogin: function ($params = {}, $callback) {
    loadMethod('BLJumpLoginRegist', 'BLJumpLoginRegist', $params, $callback)
  },
  // 展示购物车
  showShareShoppingCar: function ($params, $callback) {
    loadMethod('BLShowShareShoppingCar', 'BLShowShareShoppingCar', $params, $callback)
  },
  // 跳转到商品详情页面
  jumpCommodityDetails: function ($params, $callback) {
    loadMethod('BLJumpCommodityDetails', 'BLJumpCommodityDetails', $params, $callback)
  },
  // 添加到购物车
  addCommodityInShoppingCar: function ($params, $callback) {
    loadMethod('BLAddCommodityInShoppingCar', 'BLAddCommodityInShoppingCar', $params, $callback)
  },
  // 返回购物车中指定商品数量
  showCommodcityNumber: function ($params, $callback) {
    loadMethod('BLShowCommodcityNumber', 'BLShowCommodcityNumber', $params, $callback)
  },
  //跳转到订单确认页面
  jumpCommodityTrue: function ($params, $callback) {
    loadMethod('BLJumpCommodityTrue', 'BLJumpCommodityTrue', $params, $callback)
  },
  // 获取设备信息接口
  getDeviceNumber: function ($params, $callback) {
    loadMethod('BLGetDeviceNumber', 'BLGetDeviceNumber', $params, $callback)
  },
  // 修改导航栏Title
  setToolBarTitle: function ($params, $callback) {
    loadMethod('BLShowToolBarTitle', 'BLShowToolBarTitle', $params, $callback)
  },
  // 隐藏App Loading框
  showLoading: function ($params, $callback) {
    loadMethod('BLShowLoading', 'BLShowLoading', $params, $callback)
  },
  // 显示App Loading框
  hideLoading: function ($params, $callback) {
    loadMethod('BLUnShowLoading', 'BLUnShowLoading', $params, $callback)
  },
  // 跳转到搜索结果页面
  jumpSearch: function ($params, $callback) {
    loadMethod('BLJumpSearch', 'BLJumpSearch', $params, $callback)
  },
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
    alert(e)
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
