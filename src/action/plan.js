import * as types from './action-type'

//添加计划
export function addPlan(item) {
    return{
        type:types.ADD,
        item
    }
}
//删除计划
export function deletePlan(id) {
    return {
        type:types.DELECT,
        id
    }
}
//显示隐藏弹窗
export function show(show) {
    return{
        type:types.SHOW,
        show
    }
}