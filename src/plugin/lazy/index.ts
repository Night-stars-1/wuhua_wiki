import { App } from "vue";

const defineDirective = (app: App) => {
  app.directive("lazy", {
    mounted(el: HTMLImageElement, _, vnode: VNode) {
      const observer = new IntersectionObserver(([{ isIntersecting }]) => {
        // true；进入可视区域，false：未进入可视区域
        if (isIntersecting) {
          const key = vnode.key as string;
          if (key) {
            vnode.props?.onLazyLoad(key)
          }
          observer.unobserve(el);
        }
      });
      // 监听dom元素
      observer.observe(el);
    },
  });
};

export default function (app: App) {
  app.use({
    install(app: any) {
      // 自定义指令
      defineDirective(app);
    },
  });
}
