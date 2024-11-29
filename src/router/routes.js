import { useAuthStore } from "@/state/pinia";
export default [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/account/login.vue"),
    meta: {
      title: "Login",
      beforeResolve(routeTo, routeFrom, next) {
        const auth = useAuthStore();
        if (auth.loggedIn == true) {
          next({ name: "default" });
        } else {
          next();
        }
      }
    }
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("../views/account/logout.vue"),
    meta: {
      title: "Logout",
      authRequired: true
    }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "404",
  },
  {
    path: "/404",
    name: "404",
    meta: { title: "404 Not Found" },
    component: require("../views/utility/404.vue").default
  },
  
  // --- Start From Here is Page with Auth Required --- //
  {
    path: "/",
    name: "default",
    meta: { title: "Dashboard", authRequired: true },
    component: () => import("../views/dashboards/default.vue")
  },

  // -- Sub Menu Master -- //

  // -- Konfigurasi -- //
  {
    path: "/master/konfigurasi",
    name: "konfigurasi",
    meta: { title: "Konfigurasi Aplikasi", authRequired: true },
    component: () => import("../views/master/konfigurasi/index-konfigurasi.vue")
  },

  // -- Menu Master -- //
  {
    path: "/master/menu-master",
    name: "menu-master",
    meta: { title: "Menu Master", authRequired: true },
    component: () => import("../views/master/menu-master/index-menu-master.vue")
  },

  // -- Ordering Menu Master -- //
  {
    path: "/master/menu-master/ordering",
    name: "ordering-menu-master",
    meta: { title: "Ordering Menu Master", authRequired: true },
    component: () => import("../views/master/menu-master/ordering-menu-master.vue")
  },

  // -- Role -- //
  {
    path: "/master/role",
    name: "role",
    meta: { title: "Role", authRequired: true },
    component: () => import("../views/master/role/index-role.vue")
  },

  // -- User -- //
  {
    path: "/master/user",
    name: "user",
    meta: { title: "User", authRequired: true },
    component: () => import("../views/master/user/index-user.vue")
  },

  // -- Profil User -- //
  {
    path: "/accout/profile-user",
    name: "profile-user",
    meta: { title: "Profil User", authRequired: true },
    component: () => import("../views/account/profile.vue")
  },

  {
    path: "/dashboard/saas",
    name: "saas-dashboard",
    meta: { title: "Saas Dashboard", authRequired: true },
    component: () => import("../views/dashboards/saas/index.vue")
  },
  {
    path: "/dashboard/crypto",
    name: "crypto-dashboard",
    meta: { title: "Crypto Dashboard", authRequired: true },
    component: () => import("../views/dashboards/crypto/index.vue")
  },
  {
    path: "/dashboard/blog",
    name: "blog-dashboard",
    meta: { title: "Blog Dashboard", authRequired: true },
    component: () => import("../views/dashboards/blog/index.vue")
  },
  {
    path: "/dashboard/jobs",
    name: "jobs-dashboard",
    meta: { title: "Jobs Dashboard", authRequired: true },
    component: () => import("../views/dashboards/jobs/index.vue")
  },
  {
    path: "/calendar",
    name: "Calendar",
    meta: { title: "Calendar", authRequired: true },
    component: () => import("../views/calendar/calendar.vue")
  },
  {
    path: "/chat",
    name: "chat",
    meta: { title: "Chat", authRequired: true },
    component: () => import("../views/chat/index.vue")
  },
  {
    path: "/apps/file-manager",
    name: "file-manager",
    meta: { title: "File Manager", authRequired: true },
    component: () => import("../views/file-manager/index.vue")
  },
  {
    path: "/ecommerce/products",
    name: "Products",
    meta: { title: "Products", authRequired: true },
    component: () => import("../views/ecommerce/products.vue")
  },
  {
    path: "/ecommerce/product-detail/:id",
    name: "Product Detail",
    meta: { title: "Product Detail", authRequired: true },
    component: () => import("../views/ecommerce/product-detail.vue")
  },
  {
    path: "/ecommerce/orders",
    name: "Orders",
    meta: { title: "Orders", authRequired: true },
    component: () => import("../views/ecommerce/orders.vue")
  },
  {
    path: "/ecommerce/customers",
    name: "Customers",
    meta: { title: "Customers", authRequired: true },
    component: () => import("../views/ecommerce/customers.vue")
  },
  {
    path: "/ecommerce/cart",
    name: "Cart",
    meta: { title: "Cart", authRequired: true },
    component: () => import("../views/ecommerce/cart.vue")
  },
  {
    path: "/ecommerce/checkout",
    name: "Checkout",
    meta: { title: "Checkout", authRequired: true },
    component: () => import("../views/ecommerce/checkout.vue")
  },
  {
    path: "/ecommerce/shops",
    name: "Shops",
    meta: { title: "Shops", authRequired: true },
    component: () => import("../views/ecommerce/shops.vue")
  },
  {
    path: "/ecommerce/add-product",
    name: "Add Product",
    meta: { title: "Add Product", authRequired: true },
    component: () => import("../views/ecommerce/add-product.vue")
  },
  {
    path: "/blog/list",
    name: "blog-list",
    meta: { title: "Blog List", authRequired: true },
    component: () => import("../views/blog/list.vue")
  },
  {
    path: "/blog/grid",
    name: "blog-grid",
    meta: { title: "Blog Grid", ired: true },
    component: () => import("../views/blog/grid.vue")
  },
  {
    path: "/blog/detail",
    name: "blog-detail",
    meta: { title: "BLog Detail", authRequired: true },
    component: () => import("../views/blog/detail.vue")
  },
  {
    path: "/jobs/candidate/list",
    name: "candidate-list",
    meta: { title: "Candidate List", authRequired: true },
    component: () => import("../views/jobs/candidate/list.vue")
  },
  {
    path: "/jobs/candidate/overview",
    name: "candidate-overview",
    meta: { title: "Candidate Overview", authRequired: true },
    component: () => import("../views/jobs/candidate/overview.vue")
  },
  {
    path: "/jobs/job-categories",
    name: "job-categories",
    meta: { title: "Job Categories", authRequired: true },
    component: () => import("../views/jobs/job-categories.vue")
  },
  {
    path: "/jobs/job-details",
    name: "job-details",
    meta: { title: "Job Details", authRequired: true },
    component: () => import("../views/jobs/job-details.vue")
  },
  {
    path: "/jobs/job-apply",
    name: "job-apply",
    meta: { title: "Job Apply", authRequired: true },
    component: () => import("../views/jobs/job-apply.vue")
  },
  {
    path: "/jobs/job-grid",
    name: "job-grid",
    meta: { title: "Job Grid", authRequired: true },
    component: () => import("../views/jobs/job-grid.vue")
  },
  {
    path: "/jobs/job-list",
    name: "job-list",
    meta: { title: "Job List", authRequired: true },
    component: () => import("../views/jobs/job-list.vue")
  },
  {
    path: "/crypto/wallet",
    name: "Wallet",
    meta: { title: "Wallet", authRequired: true },
    component: () => import("../views/crypto/wallet/index.vue")
  },
  {
    path: "/crypto/buy-sell",
    name: "Buy/sell",
    meta: { title: "Buy/Sell", authRequired: true },
    component: () => import("../views/crypto/buysell/index.vue")
  },
  {
    path: "/crypto/exchange",
    name: "Exchange",
    meta: { title: "Exchange", authRequired: true },
    component: () => import("../views/crypto/exchange/index.vue")
  },
  {
    path: "/crypto/lending",
    name: "Lending",
    meta: { title: "Lending", authRequired: true },
    component: () => import("../views/crypto/lending/index.vue")
  },
  {
    path: "/crypto/orders",
    name: "crypto-orders",
    meta: { title: "Orders", authRequired: true },
    component: () => import("../views/crypto/orders/index.vue")
  },
  {
    path: "/crypto/kyc-application",
    name: "kyc-application",
    meta: { title: "KYC Application", authRequired: true },
    component: () => import("../views/crypto/kycapplication/index.vue")
  },
  {
    path: "/crypto/ico-landing",
    name: "Ico-landing",
    meta: { title: "ICO Landing", authRequired: true },
    component: () => import("../views/crypto/ico-landing.vue")
  },
  {
    path: "/invoices/detail",
    name: "Invoice Detail",
    meta: { title: "Invoice Detail", authRequired: true },
    component: () => import("../views/invoices/detail.vue")
  },
  {
    path: "/invoices/list",
    name: "Invoice List",
    meta: { title: "Invoice List", authRequired: true },
    component: () => import("../views/invoices/list.vue")
  },
  {
    path: "/ui/alerts",
    name: "Alerts",
    meta: { title: "Alerts", authRequired: true },
    component: () => import("../views/ui/alerts.vue")
  },
  {
    path: "/ui/buttons",
    name: "Buttons",
    meta: { title: "Buttons", authRequired: true },
    component: () => import("../views/ui/buttons.vue")
  },
  {
    path: "/ui/cards",
    name: "Cards",
    meta: { title: "Cards", authRequired: true },
    component: () => import("../views/ui/cards.vue")
  },
  {
    path: "/ui/carousel",
    name: "Carousel",
    meta: { title: "Carousel", authRequired: true },
    component: () => import("../views/ui/carousel.vue")
  },
  {
    path: "/ui/dropdowns",
    name: "Dropdowns",
    meta: { title: "Dropdowns", authRequired: true },
    component: () => import("../views/ui/dropdowns.vue")
  },
  {
    path: "/ui/grid",
    name: "Grid",
    meta: { title: "Grid", authRequired: true },
    component: () => import("../views/ui/grid.vue")
  },
  {
    path: "/ui/images",
    name: "Images",
    meta: { title: "Images", authRequired: true },
    component: () => import("../views/ui/images.vue")
  },
  {
    path: "/ui/modals",
    name: "Modals",
    meta: { title: "Modals", authRequired: true },
    component: () => import("../views/ui/modals.vue")
  },
  {
    path: "/ui/offcanvas",
    name: "offcanvas",
    meta: { title: "offcanvas", authRequired: true },
    component: () => import("../views/ui/offcanvas.vue")
  },
  {
    path: "/ui/rangeslider",
    name: "Rangeslider",
    meta: { title: "Range Slider", authRequired: true },
    component: () => import("../views/ui/rangeslider.vue")
  },
  {
    path: "/ui/progressbars",
    name: "Progressbars",
    meta: { title: "Progress Bars", authRequired: true },
    component: () => import("../views/ui/progressbars.vue")
  },
  {
    path: "/ui/placeholder",
    name: "Placeholder",
    meta: { title: "Placeholder", authRequired: true },
    component: () => import("../views/ui/placeholder.vue")
  },
  {
    path: "/ui/sweet-alert",
    name: "Sweet-alert",
    meta: { title: "SweetAlert 2", authRequired: true },
    component: () => import("../views/ui/sweet-alert.vue")
  },
  {
    path: "/ui/tabs-accordions",
    name: "Tabs-accordions",
    meta: { title: "Tabs & Accordions", authRequired: true },
    component: () => import("../views/ui/tabs-accordions.vue")
  },
  {
    path: "/ui/typography",
    name: "Typography",
    meta: { title: "Typography", authRequired: true },
    component: () => import("../views/ui/typography.vue")
  },
  {
    path: "/ui/video",
    name: "Video",
    meta: { title: "Video", authRequired: true },
    component: () => import("../views/ui/video.vue")
  },
  {
    path: "/ui/general",
    name: "General",
    meta: { title: "General UI", authRequired: true },
    component: () => import("../views/ui/general.vue")
  },
  {
    path: "/ui/colors",
    name: "Colors",
    meta: { title: "Colors", authRequired: true },
    component: () => import("../views/ui/colors.vue")
  },
  {
    path: "/ui/lightbox",
    name: "Lightbox",
    meta: { title: "Lightbox", authRequired: true },
    component: () => import("../views/ui/lightbox.vue")
  },
  {
    path: "/ui/image-cropper",
    name: "Image Cropper",
    meta: { title: "Image Cropper", authRequired: true },
    component: () => import("../views/ui/cropper.vue")
  },
  {
    path: "/ui/utilities",
    name: "Utilities",
    meta: { title: "Utilities", authRequired: true },
    component: () => import("../views/ui/utilities.vue")
  },
  {
    path: "/projects/grid",
    name: "Projects Grid",
    meta: { title: "Project Grid", authRequired: true },
    component: () => import("../views/projects/projects-grid.vue")
  },
  {
    path: "/projects/list",
    name: "Projects List",
    meta: { title: "Project List", authRequired: true },
    component: () => import("../views/projects/projects-list.vue")
  },
  {
    path: "/projects/overview",
    name: "Project Overview",
    meta: { title: "Project Overview", authRequired: true },
    component: () => import("../views/projects/overview.vue")
  },
  {
    path: "/projects/create",
    name: "Create New",
    meta: { title: "Create New", authRequired: true },
    component: () => import("../views/projects/create.vue")
  },
  {
    path: "/contacts/grid",
    name: "User Grid",
    meta: { title: "Users Grid", authRequired: true },
    component: () => import("../views/contacts/contacts-grid.vue")
  },
  {
    path: "/contacts/list",
    name: "User List",
    meta: { title: "Contact Users List", authRequired: true },
    component: () => import("../views/contacts/contacts-list.vue")
  },
  {
    path: "/contacts/profile",
    name: "Profile",
    meta: { title: "Profile", authRequired: true },
    component: () => import("../views/contacts/contacts-profile.vue")
  },
  {
    path: "/charts/apex",
    name: "Apex chart",
    meta: { title: "Apex Charts", authRequired: true },
    component: () => import("../views/charts/apex.vue")
  },
  {
    path: "/charts/chartjs",
    name: "Chartjs chart",
    meta: { title: "Chartjs Charts", authRequired: true },
    component: () => import("../views/charts/chartjs/index.vue")
  },
  {
    path: "/charts/chartist",
    name: "Chartist chart",
    meta: { title: "Chartist Charts", authRequired: true },
    component: () => import("../views/charts/chartist.vue")
  },
  {
    path: "/charts/echart",
    name: "Echart chart",
    meta: { title: "E Charts", authRequired: true },
    component: () => import("../views/charts/echart/index.vue")
  },
  {
    path: "/icons/boxicons",
    name: "Boxicons Icon",
    meta: { title: "Boxicons", authRequired: true },
    component: () => import("../views/icons/boxicons.vue")
  },
  {
    path: "/icons/materialdesign",
    name: "Materialdesign Icon",
    meta: { title: "Material Design Icons", authRequired: true },
    component: () => import("../views/icons/materialdesign.vue")
  },
  {
    path: "/icons/dripicons",
    name: "Dripicons Icon",
    meta: { title: "Dripicons", authRequired: true },
    component: () => import("../views/icons/dripicons.vue")
  },
  {
    path: "/icons/fontawesome",
    name: "Fontawesome Icon",
    meta: { title: "Font Awesome", authRequired: true },
    component: () => import("../views/icons/fontawesome.vue")
  },
  {
    path: "/maps/google",
    name: "Google Maps",
    meta: { title: "Google Maps", authRequired: true },
    component: () => import("../views/maps/google.vue")
  },
  {
    path: "/maps/amcharts",
    name: "Amcharts Maps",
    meta: { title: "Amcharts Maps", authRequired: true },
    component: () => import("../views/maps/amcharts/index.vue")
  },
  {
    path: "/tables/basic",
    name: "Basic Tables",
    meta: { title: "Basic Tables", authRequired: true },
    component: () => import("../views/tables/basictable.vue")
  },
  {
    path: "/form/advanced",
    name: "Form Advanced",
    meta: { title: "Form Advanced", authRequired: true },
    component: () => import("../views/forms/advanced.vue")
  },
  {
    path: "/form/elements",
    name: "Form Elements",
    meta: { title: "Form Elements", authRequired: true },
    component: () => import("../views/forms/elements.vue")
  },
  {
    path: "/form/layouts",
    name: "Form Layouts",
    meta: { title: "Form Layouts", authRequired: true },
    component: () => import("../views/forms/layouts.vue")
  },
  {
    path: "/form/editor",
    name: "Form Editors",
    meta: { title: "Form Editors", authRequired: true },
    component: () => import("../views/forms/editors.vue")
  },
  {
    path: "/form/uploads",
    name: "File Uploads",
    meta: { title: "Form File Uploads", authRequired: true },
    component: () => import("../views/forms/uploads.vue")
  },
  {
    path: "/form/validation",
    name: "Form Validation",
    meta: { title: "Form Validation", authRequired: true },
    component: () => import("../views/forms/validation.vue")
  },
  {
    path: "/form/wizard",
    name: "Form Wizard",
    meta: { title: "Form Wizard", authRequired: true },
    component: () => import("../views/forms/wizard.vue")
  },
  {
    path: "/form/repeater",
    name: "Form Repeater",
    meta: { title: "Form Repeater", authRequired: true },
    component: () => import("../views/forms/repeater.vue")
  },
  {
    path: "/form/mask",
    name: "Form Mask",
    meta: { title: "Form Mask", authRequired: true },
    component: () => import("../views/forms/mask.vue")
  },
  {
    path: "/pages/starter",
    name: "Starter",
    meta: { title: "Starter Page", authRequired: true },
    component: () => import("../views/utility/starter.vue")
  },
  {
    path: "/pages/maintenance",
    name: "Maintenance",
    meta: { title: "Maintenance Page", authRequired: true },
    component: () => import("../views/utility/maintenance.vue")
  },
  {
    path: "/pages/coming-soon",
    name: "coming-soon",
    meta: { title: "Coming Soon", authRequired: true },
    component: () => import("../views/utility/coming-soon.vue")
  },
  {
    path: "/pages/timeline",
    name: "Timeline",
    meta: { title: "Timeline", authRequired: true },
    component: () => import("../views/utility/timeline.vue")
  },
  {
    path: "/pages/faqs",
    name: "FAQs",
    meta: { title: "FAQs", authRequired: true },
    component: () => import("../views/utility/faqs.vue")
  },
  {
    path: "/pages/pricing",
    name: "Pricing",
    meta: { title: "Pricing", authRequired: true },
    component: () => import("../views/utility/pricing.vue")
  },
  {
    path: "/pages/404",
    name: "Error-404",
    meta: { title: "404 Error Page", authRequired: true },
    component: () => import("../views/utility/404.vue")
  },
  {
    path: "/pages/500",
    name: "Error-500",
    meta: { title: "500 Error Page", authRequired: true },
    component: () => import("../views/utility/500.vue")
  },
  {
    path: "/email/inbox",
    name: "Inbox",
    meta: { title: "Inbox", authRequired: true },
    component: () => import("../views/email/inbox.vue")
  },
  {
    path: "/email/reademail/:id",
    name: "Read Email",
    meta: { title: "Read Email", authRequired: true },
    component: () => import("../views/email/reademail.vue")
  },
  {
    path: "/email/templates/basic",
    name: "Email template basic",
    meta: { title: "Email Action Basic", authRequired: true },
    component: () => import("../views/email/templates/basic.vue")
  },
  {
    path: "/email/templates/billing",
    name: "Email template billing",
    meta: { title: "Billing Email Template", authRequired: true },
    component: () => import("../views/email/templates/billing.vue")
  },
  {
    path: "/email/templates/alert",
    name: "Email template alert",
    meta: { title: "Alert Email Template", authRequired: true },
    component: () => import("../views/email/templates/alert.vue")
  },
  {
    path: "/tasks/list",
    name: "Task list",
    meta: { title: "Task list", authRequired: true },
    component: () => import("../views/tasks/task-list.vue")
  },
  {
    path: "/tasks/kanban",
    name: "Kanbanboard",
    meta: { title: "Kanban Board", authRequired: true },
    component: () => import("../views/tasks/kanbanboard.vue")
  },
  {
    path: "/tasks/create",
    name: "Create Task",
    meta: { title: "Create Task", authRequired: true },
    component: () => import("../views/tasks/task-create.vue")
  },
  {
    path: "/auth/login-1",
    name: "Login sample",
    meta: { title: "Login", authRequired: true },
    component: () => import("../views/sample-pages/login-sample.vue")
  },
  {
    path: "/auth/login-2",
    name: "Login-2-sample",
    meta: { title: "Login 2", authRequired: true },
    component: () => import("../views/sample-pages/login-2.vue")
  },
  {
    path: "/auth/register-1",
    name: "Register sample",
    meta: { title: "Register", authRequired: true },
    component: () => import("../views/sample-pages/register-sample.vue")
  },
  {
    path: "/auth/register-2",
    name: "Register-2",
    meta: { title: "Register 2", authRequired: true },
    component: () => import("../views/sample-pages/register-2.vue")
  },
  {
    path: "/auth/recoverpwd",
    name: "Recover pwd",
    meta: { title: "Recover Password", authRequired: true },
    component: () => import("../views/sample-pages/recoverpw-sample.vue")
  },
  {
    path: "/auth/recoverpwd-2",
    name: "Recover pwd-2",
    meta: { title: "Recover Password 2", authRequired: true },
    component: () => import("../views/sample-pages/recoverpwd-2.vue")
  },
  {
    path: "/auth/lock-screen",
    name: "Lock screen",
    meta: { title: "Lock Screen", authRequired: true },
    component: () => import("../views/sample-pages/lockscreen.vue")
  },
  {
    path: "/auth/lock-screen-2",
    name: "Lock screen-2",
    meta: { title: "Lock Screen 2", authRequired: true },
    component: () => import("../views/sample-pages/lockscreen-2.vue")
  },
  {
    path: "/auth/confirm-mail",
    name: "confirm-mail",
    meta: { title: "Confirm Email", authRequired: true },
    component: () => import("../views/sample-pages/confirm-mail.vue")
  },
  {
    path: "/auth/confirm-mail-2",
    name: "confirm-mail-2",
    meta: { title: "Confirm Email 2", authRequired: true },
    component: () => import("../views/sample-pages/confirm-mail-2.vue")
  },
  {
    path: "/auth/email-verification",
    name: "email-verification",
    meta: { title: "Email Verification", authRequired: true },
    component: () => import("../views/sample-pages/email-verification.vue")
  },
  {
    path: "/auth/email-verification-2",
    name: "email-verification-2",
    meta: { title: "Email Verification 2", authRequired: true },
    component: () => import("../views/sample-pages/email-verification-2.vue")
  },
  {
    path: "/auth/two-step-verification",
    name: "two-step-verification",
    meta: { title: "Two Step Verification", authRequired: true },
    component: () => import("../views/sample-pages/two-step-verification.vue")
  },
  {
    path: "/auth/two-step-verification-2",
    name: "two-step-verification-2",
    meta: { title: "Two Step Verification 2", authRequired: true },
    component: () => import("../views/sample-pages/two-step-verification-2.vue")
  }
];
