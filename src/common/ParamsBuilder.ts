import { HttpException, HttpStatus } from "@nestjs/common";

/**
 * This is a builder class from create a params 
 * for the repository calls.
 * do readup on the builder patter here {@link https://dhanrajsp.me/snippets/builder-pattern-in-javascript}
 */
export class ParamsBuilder {
    params = {
        searchParams: null,
        limit: null,
        sort: null,
        cacheKeys: null,
        skip: null,
        project: null,
        isLean: true
    };

    constructor(data ?: {
        searchParams: any,
        limit: any,
        sort: any,
        cacheKeys: any
        skip: any,
        project: any,
        isLean: boolean
    }) {
        if(data) {
            this.params = data;
        }
        return this;
    }

    /**
     * add any serach paramas using the builder format.
     * 
     * @param key param key in string fromat
     * @param value value in any type of format
     * @returns data builder class {@link ParamsBuilder}
     */
    addSearch(key: string, value: any) {
        if (!this.params.searchParams)
            this.params.searchParams = {};

        if (value === null || value === undefined) {
            throw new HttpException(
                { message: `Found null in the key: ${key} in the search params.` },
                HttpStatus.BAD_REQUEST
            );
        }


        this.params.searchParams[key] = value;
        return this;
    }

    /**
     * add the limit in the search params
     * @param value value in number format.
     * @returns data builder class {@link ParamsBuilder}
     */
     addlimit(value: any) {
        this.params.limit = value;
        return this;
    }

    /**
     * add the skip in the search params
     * @param value value in number format.
     * @returns data builder class {@link ParamsBuilder}
     */
     addSkip(value: any) {
        this.params.skip = value;
        return this;
     }

    /**
     * add the sort in the order
     * 
     * @param key sort key in string fromat
     * @param value value in -1 || 0
     * @returns data builder class {@link ParamsBuilder}
     */
    addSort(key: string, value: any) {
        if (!this.params.sort)
            this.params.sort = {};

        this.params.sort[key] = value;
        return this;
    }

    fields(fields: any) {
        this.params.project = fields;
        return this;
    }

    /**
     * remove any object from the params.
     * @param key key to remove in root object
     */
    remove(key: string) {
        if (this.params[key])
            delete this.params[key];
    }

    /**
     * Added the unique key which will work as a cache key 
     * and cache will get created on this key.
     * @param key string key
     * @param value string value
     */
    addCacheKey(key: string, value) {
        if(value === null || value === undefined) return this;

        if (!this.params.cacheKeys)
        this.params.cacheKeys = {};

        this.params.cacheKeys[key] = value;
        return this;
    }

    /**
     * build the complete object. call this after you completed the build.
     * @returns the params object.
     */
    build() {
        if(!this.params.sort) delete this.params.sort;
        if(!this.params.limit) delete this.params.limit;
        if(!this.params.skip) delete this.params.skip;
        if(!this.params.project) delete this.params.project;
        if(!this.params.cacheKeys) delete this.params.cacheKeys;
        
        return this.params;
    }

}