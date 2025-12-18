module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/sitemap.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>sitemap
]);
async function sitemap() {
    const baseUrl = 'https://www.stainlesssteelmarket.com';
    const currentDate = new Date().toISOString().split('T')[0];
    return [
        // Homepage
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0
        },
        // Main Pages
        {
            url: `${baseUrl}/about-us`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8
        },
        // Product Series Pages
        {
            url: `${baseUrl}/products/200-series`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9
        },
        {
            url: `${baseUrl}/products/300-series`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9
        },
        {
            url: `${baseUrl}/products/400-series`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9
        },
        {
            url: `${baseUrl}/products/500-series`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9
        },
        {
            url: `${baseUrl}/products/600-series`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9
        },
        // Product Category Pages
        {
            url: `${baseUrl}/products/stainless-steel-sheet`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9
        },
        {
            url: `${baseUrl}/products/stainless-steel-coil`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9
        },
        {
            url: `${baseUrl}/products/stainless-steel-pipe-tube`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9
        },
        {
            url: `${baseUrl}/products/stainless-steel-fittings`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9
        },
        {
            url: `${baseUrl}/products/customized-stainless-steel-parts`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8
        },
        // Application Pages
        {
            url: `${baseUrl}/applications/kitchen-equipment`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/applications/construction`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/applications/automotive`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/applications/food-processing`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/applications/water-treatment`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/applications/chemical`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8
        },
        // Surface Finish Pages
        {
            url: `${baseUrl}/surface-finish/2b`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7
        },
        {
            url: `${baseUrl}/surface-finish/ba`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7
        },
        {
            url: `${baseUrl}/surface-finish/no4`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7
        },
        {
            url: `${baseUrl}/surface-finish/hl`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7
        },
        {
            url: `${baseUrl}/surface-finish/mirror`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7
        },
        {
            url: `${baseUrl}/surface-finish/embossed`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7
        },
        // Knowledge Base Pages
        {
            url: `${baseUrl}/knowledge-base/grades`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/knowledge-base/technical-guide`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/knowledge-base/manufacturing-process`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/knowledge-base/buyers-guide`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8
        },
        // Blog Pages
        {
            url: `${baseUrl}/blog/comparison`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7
        },
        {
            url: `${baseUrl}/blog/pricing`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7
        },
        {
            url: `${baseUrl}/blog/trends`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7
        },
        {
            url: `${baseUrl}/blog/applications`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7
        },
        {
            url: `${baseUrl}/blog/lists`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7
        },
        // Specific Product Pages - 300 Series Sheets
        {
            url: `${baseUrl}/products/stainless-steel-sheet/304`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/products/stainless-steel-sheet/316`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/products/stainless-steel-sheet/321`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/products/stainless-steel-sheet/310`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/products/stainless-steel-sheet/303`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8
        },
        // Specific Product Pages - 600 Series Sheets
        {
            url: `${baseUrl}/products/stainless-steel-sheet/631`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/products/stainless-steel-sheet/504`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8
        }
    ];
}
}),
"[project]/app/sitemap--route-entry.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/sitemap.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-route] (ecmascript)");
;
;
;
const contentType = "application/xml";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "sitemap";
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] !== 'function') {
    throw new Error('Default export is missing in "./sitemap.ts"');
}
async function GET() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRouteData"])(data, fileType);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](content, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        }
    });
}
;
}),
"[project]/app/sitemap--route-entry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GET"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/sitemap--route-entry.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/sitemap.ts [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6afd37fa._.js.map