"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var index_2 = require("../_services/index");
var StackoverflowComponent = /** @class */ (function () {
    function StackoverflowComponent(route, router, userService, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
        this.users = [];
        this.nCnt = 0;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    StackoverflowComponent.prototype.documentClick = function (event) {
        var x = JSON.parse(localStorage.getItem('currentUser'));
        x.count = x.count + 1;
        localStorage.setItem('currentUser', JSON.stringify(x));
        var y = JSON.parse(localStorage.getItem('users'));
        for (var i = 0; i < y.length; i++) {
            if (y[i].id == x.id) {
                y[i].count = x.count;
                localStorage.setItem('users', JSON.stringify(y));
            }
        }
    };
    StackoverflowComponent.prototype.clickMe = function () {
        this.nCnt = this.nCnt + 1;
    };
    StackoverflowComponent.prototype.clickEventDownvote = function () {
        var x = JSON.parse(localStorage.getItem('currentUser'));
        x.downvotes = x.downvotes + 1;
        localStorage.setItem('currentUser', JSON.stringify(x));
        var y = JSON.parse(localStorage.getItem('users'));
        for (var i = 0; i < y.length; i++) {
            if (y[i].id == x.id) {
                y[i].downvotes = x.downvotes;
                localStorage.setItem('users', JSON.stringify(y));
            }
        }
    };
    StackoverflowComponent.prototype.clickEventUpvote = function () {
        var x = JSON.parse(localStorage.getItem('currentUser'));
        x.upvotes = x.upvotes + 1;
        localStorage.setItem('currentUser', JSON.stringify(x));
        var y = JSON.parse(localStorage.getItem('users'));
        for (var i = 0; i < y.length; i++) {
            if (y[i].id == x.id) {
                y[i].upvotes = x.upvotes;
                localStorage.setItem('users', JSON.stringify(y));
            }
        }
    };
    StackoverflowComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.HostListener('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], StackoverflowComponent.prototype, "documentClick", null);
    StackoverflowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'stackoverflow.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            index_2.UserService,
            index_1.AuthenticationService,
            index_1.AlertService])
    ], StackoverflowComponent);
    return StackoverflowComponent;
}());
exports.StackoverflowComponent = StackoverflowComponent;
//# sourceMappingURL=stackoverflow.component.js.map