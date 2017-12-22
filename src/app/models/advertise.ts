/*
    广告位接口模版(测试)
*/
const Advertise = {

    // 查询详细
    list(template?: string) {
        const data = {
            "type": "Advertise",
            "act": "Select_List",
            "para": {
                "params": {
                    "s_Aid": "",
                    "s_Total_parameter": "Aid,Atitle,Url,Pic1"                }
            }
        };

        return {
            "type": "Advertise",
            "act": "Select_List",
            "para": {
                "params": Object.assign(data.para.params, template)
            }
        };
    }

    // 查询列表
};

export default Advertise;
