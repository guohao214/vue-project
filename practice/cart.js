/**
 * Created by 20164411 on 2017/2/22.
 */
var cartVM = new Vue({
    el: '#content',
    data: {
        products: '',
        checkedAll: false,
        checkedLength: 0,
        totalIntegral: 0,
        totalAmount: 0
    },
    mounted: function () {
        this.$nextTick(() => this.getProducts())
    },
    filters: {
        formatMoney: function (money) {
            return money + '元'
        }
    },
    methods: {
        getProducts: function () {
            this.$http.get('data.json').then(function (res) {
                this.products = res.data.productList;
            })
        },
        selectProduct: function (productItem) {
            if (typeof productItem.checked === 'undefined')
                this.$set(productItem, 'checked', true)
            else
                productItem.checked = !productItem.checked;

            // 判断是否全部选中
            if (this.products.filter(item=>item.checked!== true).length > 0)
                this.checkedAll = false;
            else
                this.checkedAll = true;

            this._calc();
        },
        _setProductChecked: function (productItem, checkedStatus) {
            if (typeof productItem.checked === 'undefined')
                this.$set(productItem, 'checked', checkedStatus)
            else
                productItem.checked = checkedStatus;
        },
        selectAll: function () {
            this.checkedAll = !this.checkedAll;
            this.products.forEach((item) => this._setProductChecked(item, this.checkedAll))

            this._calc();
        },
        calcTotalAmount: function () {
            this.totalAmount = 0;
            var _self = this;
            this.products.forEach(function (item) {
                if (item.checked)
                    _self.totalAmount += (item.quantity * item.price);
            })
        },
        calcTotalIntegral: function () {
            this.totalIntegral = 0;
            var _self = this;
            this.products.forEach(function (item) {
                if (item.checked)
                    _self.totalIntegral += (item.integral * 1);
            })
        },
        _calc: function () {
            this.calcTotalAmount();
            this.calcTotalIntegral();
        },
        changeQuantity: function (productItem, quantity) {
            if (isNaN(quantity))
                quantity = 1;

            productItem.quantity += quantity;
            if (productItem.quantity <= 0)
                productItem.quantity = 1;

            this.calcTotalAmount();
        },
        removeProduct: function (productItem) {
            this.products.splice(this.products.indexOf(productItem), 1);
            this._calc();
        },
        deleteSelectProduct: function () {
            var selectedProducts = [];

            this.products.forEach(item => {if (item.checked) selectedProducts.push(item);})
            selectedProducts.forEach(item=>this.products.splice(this.products.indexOf(item), 1));

            if (this.products.length == 0)
                this.checkedAll = false;

            this._calc();
        }
    }
})