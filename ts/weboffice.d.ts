/**
 * 定义用户头部其它按钮菜单
 */
interface IUserHeaderSubItemsConf {
    /**
     * 类型
     */
    type: 'export_img' | 'split_line' | 'custom'
    /**
     * 文本
     */
    text?: string
    /**
     * 事件订阅
     */
    subscribe?: ((arg0?: any) => any) | string
}


/**
* 定义用户头部按钮配置
*/
interface IUserHeaderButtonConf {
    /**
     * 提示
     */
    tooltip?: string
    /**
     * 事件订阅
     */
    subscribe?: ((arg0?: any) => any) | string

    /**
     * 菜单项
     */
    items?: Array<IUserHeaderSubItemsConf>
}

/**
* 用于保存iframe原始尺寸
*/
interface IIframeWH {
    width: string;
    height: string;
}

/**
* 定义用户头部配置
*/
interface IUserHeadersConf {
    /**
     * 返回按钮
     */
    backBtn?: IUserHeaderButtonConf
    /**
     * 分享按钮
     */
    shareBtn?: IUserHeaderButtonConf
    /**
     * 其他按钮
     */
    otherMenuBtn?: IUserHeaderButtonConf
}
interface ICommonOptions {
    /**
     * 是否显示顶部区域，头部和工具栏
     */
    isShowTopArea: boolean,
    /**
     * 是否显示头部
     */
    isShowHeader: boolean
    /**
     * 是否需要父级全屏
     */
    isParentFullscreen: boolean
    /**
     * 是否在iframe区域内全屏
     */
    isIframeViewFullscreen: boolean
    /**
     * 是否在浏览器区域内全屏
     */
    isBrowserViewFullscreen: boolean
}
/**
* 文字自定义配置
*/
interface IWpsOptions {
    /**
     * 是否显示目录
     */
    isShowDocMap?: boolean
    /**
     * 默认以最佳显示比例打开
     */
    isBestScale?: boolean
    /**
     * pc-是否展示底部状态栏
     */
    isShowBottomStatusBar?: boolean
}

/**
* 表格自定义配置
*/
interface IEtOptions { }

/**
* pdf自定义配置
*/
interface IPDFOptions {
    isShowComment?: boolean
    isInSafeMode?: boolean
    /**
     * pc-是否展示底部状态栏
     */
    isShowBottomStatusBar?: boolean
}

/**
* 演示自定义配置
*/
interface IWppOptions {
    /**
     * pc-是否展示底部状态栏
     */
    isShowBottomStatusBar?: boolean
}

/**
* Otl 自定义配置
*/
interface IOtlOptions {
    /**
    * 加载项配置
    */
    loadOptions?: string
    /**
     * 光标是否聚焦
     */
    notAutoFocus?: boolean
}

/**
* 数据表自定义配置
*/
interface IDBOptions {
    /**
     * 是否显示使用反馈按钮
     */
    isShowFeedback?: boolean
}

/**
* 定义用户通用事件订阅
*/
interface ISubscriptionsConf {
    [key: string]: any
    /**
     * 导航事件
     */
    navigate: (arg0?: any) => any
    /**
     * WPSWEB ready 事件
     */
    ready: (arg0?: any) => any
    /**
     * 打印事件
     */
    print: {
        custom?: boolean
        subscribe: (arg0?: any) => any
    }
    /**
     * 导出 PDF 事件
     */
    exportPdf: (arg0?: any) => any
}

interface tokenData {
    token: string
    timeout: number
}

interface clipboardData {
    text: string
    html: string
}

/**
* 用户配置
*/
interface IConfig {
    /**
     * WPSWEB iframe 挂载点
     */
    mount?: HTMLElement
    /**
     * url参数
     */
    url?: string
    wpsUrl?: string // 即将废弃
    /**
     * 头部
     */
    headers?: IUserHeadersConf
    /**
     * 通用配置
     */
    commonOptions?: ICommonOptions
    /**
     * 文字自定义配置
     */
    wpsOptions?: IWpsOptions
    wordOptions?: IWppOptions
    /**
     * 表格自定义配置
     */
    etOptions?: IEtOptions
    excelOptions?: IEtOptions
    /**
     * 演示自定义配置
     */
    wppOptions?: IWppOptions
    pptOptions?: IWppOptions
    /**
     * pdf自定义配置
     */
    pdfOptions?: IPDFOptions
    /**
     * outline 自定义配置
     */
    otlOptions?: IOtlOptions
    /**
     * db自定义配置
     */
    dbOptions?: IDBOptions
    /**
     * 事件订阅
     */
    subscriptions?: ISubscriptionsConf
    // 调试模式
    debug?: boolean
    commandBars?: Array<IWpsCommandBars>
    print?: {
        custom?: boolean
        callback?: string
    }

    exportPdf?: {
        callback?: string
    }

    // 获取token
    refreshToken?: () => tokenData | Promise<tokenData>
    // 获取外部粘贴数据
    getClipboardData?: () => clipboardData | Promise<clipboardData>
    onToast?: (toastData: { msg: string, action: string }) => void
    onHyperLinkOpen?: (linkData: { linkUrl: string }) => void
    cooperUserAttribute?: {
        isCooperUsersAvatarVisible?: boolean,
        cooperUsersColor?: [{
            userId: string | number,
            color: string
        }]
    }
}



/** ============================= */
interface IMessage {
    eventName: string
    msgId?: number
    callbackId?: number
    data?: any
    url?: any
    result?: any
    error?: any
}

/**
*  WPSWEBAPI
*/
interface IWpsWebApi {
    WpsApplication?: () => any
}

/**
*  工具栏
*/
interface IWpsCommandBars {
    cmbId: string
    attributes: Array<IWpsCommandBarAttr> | IWpsCommandBarObjectAttr
}

/**
*  工具栏属性
*/
interface IWpsCommandBarAttr {
    name: string
    value: any
}
/**
*  工具栏属性
*/
interface IWpsCommandBarObjectAttr {
    [propName: string]: any
}
/**
 * Excel应用程序
 */
interface EtApplication {
    Range: any,
    Public: any,
    ActiveWorkbook: {
        /**获取当前登录操作者信息 */
        GetOperatorsInfo: () => any
    },
    ActiveSheet: {
        Name: string
    }
}
interface DBApplication {
    Enmu: {
        DbSheetFieldType: {
            Attachment: "Attachment"
            AutoNumber: "AutoNumber"
            CellPicture: "CellPicture"
            Checkbox: "Checkbox"
            Complete: "Complete"
            Contact: "Contact"
            CreatedBy: "CreatedBy"
            CreatedTime: "CreatedTime"
            Currency: "Currency"
            Date: "Date"
            Email: "Email"
            Formula: "Formula"
            ID: "ID"
            Invalid: "Invalid"
            Link: "Link"
            Lookup: "Lookup"
            MultiLineText: "MultiLineText"
            MultipleSelect: "MultipleSelect"
            Note: "Note"
            Number: "Number"
            Percentage: "Percentage"
            Phone: "Phone"
            Rating: "Rating"
            SingleLineText: "SingleLineText"
            SingleSelect: "SingleSelect"
            Time: "Time"
            Url: "Url"
        }
        KsoControlType: {
            ksoControlButton: 1
        }
        MsoControlType: {
            msoControlButton: 1,
            msoControlPopup: 10
        }
        RenderItem: {
            ColHeaderAddBtn: 'colHeaderAddBtn',
            ColHeaderMenuBtn: 'colHeaderMenuBtn',
            RowHeaderExpand: 'rowHeaderExpand'
        }
        RowHeightType: {
            Short: 'Short',
            Medium: 'Medium',
            Tall: 'Tall',
            ExtraTall: 'ExtraTall'
        }
        ViewType: {
            Form: "Form"
            Gallery: "Gallery"
            Gantt: "Gantt"
            Grid: "Grid"
            Kanban: "Kanban"
        }
    }
    Events: {
        Blur: "Blur"
        DocumentSaveStatus: "DocumentSaveStatus"
        FilterConditionChange: "FilterConditionChange"
        Focus: "Focus"
        GalleryResize: "GalleryResize"
        GroupFoldStatusChanged: "GroupFoldStatusChanged"
        KanbanResize: "KanbanResize"
        Keypress: "Keypress"
        ModelVisible: "ModelVisible"
        OnBroadcast: "OnBroadcast"
        OnDocViewChange: "OnDocViewChange"
        Scroll: "Scroll"
        SecurityDocChangeReconnect: "SecurityDocChangeReconnect"
        SecurityDocPermissionChange: "SecurityDocPermissionChange"
        SelectionChange: "SelectionChange"
        SwitchCommandBar: "SwitchCommandBar"
        TransactChange: "TransactChange"
        ViewDataUpdate: "ViewDataUpdate"
        ViewTypeChanged: "ViewTypeChanged"
    }
    Sub: {
        set Blur(e:(e)=>any)
        set DocumentSa(e:(e)=>any)
        set FilterConditionChange(e:(e)=>any)
        set Focus(e:(e)=>any)
        set GalleryResize(e:(e)=>any)
        set GroupFoldStatusChanged(e:(e)=>any)
        set KanbanResize(e:(e)=>any)
        set Keypress(e:(e)=>any)
        set Model(e:(e)=>any)
        set OnBroadcast(e:(e)=>any)
        set OnDoc(e:(e)=>any)
        set Scroll(e:(e)=>any)
        set SecurityDocChangeReconnect(e:(e)=>any)
        set SecurityDocPermissionChange(e:(e)=>any)
        set SelectionChange(e:(e)=>any)
        set SwitchCommandBar(e:(e)=>any)
        set TransactChange(e:(e)=>any)
        set :iewDataUpdate(e:(e)=>any)
        set ViewTypeChanged(e:(e)=>any)
    }
}

interface IFlag {
    apiReadySended: boolean,
    refreshToken?: () => tokenData | Promise<tokenData>,
    getClipboardData?: () => clipboardData | Promise<clipboardData>
    onToast?: (toastData: { msg: string, action: string }) => void,
    onHyperLinkOpen?: (linkData: { linkUrl: string }) => void
}

type TGetClipboardData = () => clipboardData | Promise<clipboardData>

declare namespace WPS {
    /**
     * WPS接口定义
     */
    interface IWps {
        version: string
        url: string
        iframe: HTMLIFrameElement
        Enum?: any, // 即将废弃
        Events?: any, // 即将废弃
        Props?: string
        mainVersion?: string
        ready: () => Promise<any>
        destroy: () => Promise<any>
        WpsApplication?: () => any
        WordApplication?: () => any
        EtApplication?: () => any
        ExcelApplication?: () => any
        WppApplication?: () => any
        PPTApplication?: () => any
        PDFApplication?: () => any
        DBApplication?: () => DBApplication
        Application: any
        setToken: (tokenData: { token: string, timeout?: number, hasRefreshTokenConfig: boolean }) => Promise<any>
        setCommandBars: (args: Array<IWpsCommandBars>) => Promise<void>
        tabs: {
            getTabs: () => Promise<Array<{ tabKey: number, text: string }>>
            switchTab: (tabKey: number) => Promise<any>,
        }
        setCooperUserColor: (usersInfo: Array<{ userId: string, color: string }>) => Promise<any>
        tokenData?: { token: string } | null
        commandBars?: Array<IWpsCommandBars> | null
        iframeReady?: boolean
        save: () => Promise<any>
        on: (eventName: string, handle: (event?: any) => void) => void
        off: (eventName: string, handle: (event?: any) => void) => void
        ApiEvent: {
            AddApiEventListener: (eventName: string, handle: (event?: any) => void) => void
            RemoveApiEventListener: (eventName: string, handle: (event?: any) => void) => void
        }
        Stack?: any
        Free?: (objId: any) => Promise<any>
        updateConfig(configData: { commandBars?: Array<IWpsCommandBars> }): Promise<void>
        executeCommandBar: (id: string) => void
    }


    function config(e: IConfig): IWps;

    function listener(e, o, a, s, c, u, l): any;
}
/*
export { ICommonOptions, IConfig, IDBOptions, IEtOptions, IFlag, IIframeWH, IMessage, IOtlOptions, IPDFOptions, ISubscriptionsConf, IUserHeaderButtonConf, IUserHeaderSubItemsConf, IUserHeadersConf, IWppOptions, IWps, IWpsCommandBarAttr, IWpsCommandBarObjectAttr, IWpsCommandBars, IWpsOptions, IWpsWebApi, TGetClipboardData, clipboardData, tokenData };
*/