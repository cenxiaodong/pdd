import { HOME_CASUAL } from './mutation-types'
export default {
    [HOME_CASUAL](state, { homecasual }) {
        // 将得到的数据赋值到state中的homecasual
        state.homecasual = homecasual
    }
}