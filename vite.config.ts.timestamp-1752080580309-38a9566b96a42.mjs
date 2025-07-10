// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import federation from "file:///D:/dev/meduza/meduza-test/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import vue from "file:///D:/dev/meduza/meduza-test/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/dev/meduza/meduza-test/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { defineConfig } from "file:///D:/dev/meduza/meduza-test/node_modules/vite/dist/node/index.js";
import vueDevTools from "file:///D:/dev/meduza/meduza-test/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/dev/meduza/meduza-test/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    federation({
      name: "host",
      filename: "host.js",
      shared: ["vue", "vue-i18n", "pinia"],
      remotes: {
        "meduza-pet-header": "http://localhost:5005/assets/meduzaHeader.js",
        "meduza-pet-footer": "http://localhost:5006/assets/meduzaFooter.js"
      },
      exposes: {
        "./NavigationService": "./src/shared/navigation/NavigationService.ts",
        "./I18nService": "./src/shared/i18n/I18nService.ts"
      }
    })
  ],
  build: {
    target: "esnext"
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  preview: {
    port: 5e3
  },
  server: {
    cors: true,
    port: 5e3,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxkZXZcXFxcbWVkdXphXFxcXG1lZHV6YS10ZXN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxkZXZcXFxcbWVkdXphXFxcXG1lZHV6YS10ZXN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9kZXYvbWVkdXphL21lZHV6YS10ZXN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCBmZWRlcmF0aW9uIGZyb20gXCJAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvblwiXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICB2dWVKc3goKSxcbiAgICB2dWVEZXZUb29scygpLFxuICAgIGZlZGVyYXRpb24oe1xuICAgICAgbmFtZTogJ2hvc3QnLFxuICAgICAgZmlsZW5hbWU6IFwiaG9zdC5qc1wiLFxuICAgICAgc2hhcmVkOiBbJ3Z1ZScsICd2dWUtaTE4bicsJ3BpbmlhJ10sXG4gICAgICByZW1vdGVzOiB7XG4gICAgICAgICdtZWR1emEtcGV0LWhlYWRlcic6ICdodHRwOi8vbG9jYWxob3N0OjUwMDUvYXNzZXRzL21lZHV6YUhlYWRlci5qcycsXG4gICAgICAgICdtZWR1emEtcGV0LWZvb3Rlcic6ICdodHRwOi8vbG9jYWxob3N0OjUwMDYvYXNzZXRzL21lZHV6YUZvb3Rlci5qcycsXG4gICAgICB9LFxuICAgICAgZXhwb3Nlczoge1xuICAgICAgICAnLi9OYXZpZ2F0aW9uU2VydmljZSc6ICcuL3NyYy9zaGFyZWQvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uU2VydmljZS50cycsXG4gICAgICAgICcuL0kxOG5TZXJ2aWNlJzogJy4vc3JjL3NoYXJlZC9pMThuL0kxOG5TZXJ2aWNlLnRzJyxcbiAgICAgIH1cbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6e1xuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9LFxuICB9LFxuICBwcmV2aWV3OntcbiAgICBwb3J0OiA1MDAwLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBjb3JzOiB0cnVlLFxuICAgIHBvcnQ6IDUwMDAsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVEsU0FBUyxlQUFlLFdBQVc7QUFFeFMsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGlCQUFpQjtBQU55SSxJQUFNLDJDQUEyQztBQVNsTixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixRQUFRLENBQUMsT0FBTyxZQUFXLE9BQU87QUFBQSxNQUNsQyxTQUFTO0FBQUEsUUFDUCxxQkFBcUI7QUFBQSxRQUNyQixxQkFBcUI7QUFBQSxNQUN2QjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsdUJBQXVCO0FBQUEsUUFDdkIsaUJBQWlCO0FBQUEsTUFDbkI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFNO0FBQUEsSUFDSixRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDUCwrQkFBK0I7QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
