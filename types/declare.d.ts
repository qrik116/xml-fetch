/** HTTP заголовки */
declare type THeaders = { [x: string]: string }
declare type TEmptyProps = { [x: string]: any }

/** Опции конструктора */
declare type TOptions = {
    /** Метод запроса, по умолчанию GET */
    method?: string,
    /** Асинхронный запрос, по умолчанию false */
    async?: boolean,
    /** Заголовки */
    headers?: THeaders,
    /** Время жизни запроса, по умолчанию 30000 */
    timeout?: number,
    /** Текст ошибки по истечению жизни запроса */
    timeoutError?: string,
    /** Очищать пустые свойства объекта, по умолчанию false */
    removeEmpty?: boolean
}

/** Обязательные опций конструктора */
declare type TOptionsRequire = {
    method: string,
    async: boolean,
    headers: THeaders,
    timeout: number,
    timeoutError: string,
    removeEmpty: boolean
}

/** Параметры запроса для POST метода */
declare type TPostParams = {
    files?: { [x: string]: Blob[] },
    data: { [x: string]: []|string }
}

/** Параметры запроса для GET метода */
declare type TGetParams = {
    query: object
}

/** Callback функция */
declare type TCallBackFunc = (data?: any) => any

interface XmlFetch extends IXmlFetch {
    then(callback: TCallBackFunc): XmlFetch;
    catch(callback: TCallBackFunc): XmlFetch;
    abort(): XmlFetch
}

declare interface IXmlFetch {
    /** GET запрос */
    get(url: string, params: TGetParams, options?: TOptions): XmlFetch;
    /** POST запрос */
    post(url: string, params: TPostParams, options?: TOptions): XmlFetch;
    /** PUT запрос */
    put(url: string, params: TPostParams, options?: TOptions): XmlFetch;
    /** DELETE запрос */
    del(url: string, params: TGetParams, options?: TOptions): XmlFetch;
}
