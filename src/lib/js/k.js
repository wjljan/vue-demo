/**
 * 公共函数
 * @注: 如果组件也有使用, 可以用mixin方式混入进组件
 */

import $ from 'jquery'

/**
 * ajax请求(jQuery-ajax的promise封装)
 * @param url 请求地址
 * @param data 请求参数(默认值为空对象)
 */
export const ajax = (url, data = {}) => {
	if (!url) throw("缺少必要参数：url");
	return new Promise((resolve, reject) => {
		$.ajax({
			url : url,
			type : "post",
			data : data,
			success (res){
				!res.errno ? resolve(res) : reject(res.errmsg);
			},
			error (xhr){
				reject("错误：" + xhr.status);
			}
		});
	});
}

/**
 * 验证是否是数组
 * @param data 要验证的数据
 */
export const isArray = (data) => toString.apply(data) === '[object Array]';

/**
 * 验证是否是对象
 * @param data 要验证的数据
 */
export const isObject = (data) => toString.call(data) === '[object Object]';

/**
 * 克隆一个对象/数组
 * @param data 要克隆的原始对象
 */
export const clone = (data) => {
	if (this.isObject(data) || this.isArray(data)) 
		return Object.create(data);
	else 
		throw "clone方法的参数仅限于数组或对象";
}