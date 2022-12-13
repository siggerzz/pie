import * as React from "react";
import { SVGProps } from "react";

const FriedChicken = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="c-pieIcon c-pieIcon--friedChicken" width="1em" height="1em" role="img" {...props}><path d="M7.9975 4.1825C7.94035 3.79477 7.99866 3.39879 8.16516 3.04399C8.33167 2.6892 8.59899 2.3913 8.93375 2.1875C8.90098 2.7448 9.03501 3.29922 9.31875 3.78C9.5375 4.12125 9.93125 4.43625 10.3775 5.005C10.6364 5.3352 10.8214 5.71714 10.92 6.125C10.9594 6.36842 10.9594 6.61658 10.92 6.86C10.8773 7.08182 10.7975 7.29482 10.6838 7.49C10.2872 8.11883 9.65817 8.56543 8.93375 8.7325C9.13663 8.16304 9.29174 7.57769 9.3975 6.9825C9.3975 6.86875 9.3975 6.79 9.3975 6.71125C9.3975 6.6325 9.345 6.58875 9.3275 6.51875C9.22926 6.34515 9.11502 6.1811 8.98625 6.02875C8.50942 5.50432 8.16974 4.87006 7.9975 4.1825V4.1825ZM13.5363 4.5675C13.5633 4.60918 13.5867 4.65309 13.6063 4.69875C13.6063 4.75125 13.6063 4.8125 13.6063 4.9C13.5597 5.40098 13.4778 5.89805 13.3613 6.3875C13.677 6.33586 13.9779 6.21693 14.2436 6.03878C14.5093 5.86064 14.7336 5.62744 14.9013 5.355C15.1041 4.99359 15.1781 4.574 15.1113 4.165C15.0341 3.80488 14.8821 3.46501 14.665 3.1675C14.2888 2.66875 13.9913 2.4325 13.79 2.17875C13.5424 1.78817 13.4063 1.33734 13.3963 0.875C13.0985 1.03695 12.856 1.28434 12.7 1.58532C12.5441 1.8863 12.4818 2.22707 12.5213 2.56375C12.6291 3.16325 12.8915 3.72423 13.2825 4.19125C13.3761 4.31031 13.461 4.43606 13.5363 4.5675V4.5675ZM27.125 15.2688C27.1052 16.622 26.6686 17.9362 25.8748 19.0323C25.0809 20.1283 23.9683 20.953 22.6888 21.3938C22.0413 22.54 19.7138 25.655 14.3238 23.8C9.28376 22.05 7.7175 22.6187 6.72 24.1762C5.83625 25.515 5.25 26.3025 4.375 26.3025C4.00588 26.2866 3.64843 26.1684 3.3425 25.9613L3.24625 25.9C2.93411 25.6641 2.69751 25.3422 2.56542 24.9739C2.43332 24.6056 2.41146 24.2068 2.5025 23.8262C2.55908 23.425 2.52925 23.0163 2.415 22.6275C2.20447 22.1148 1.90862 21.6414 1.54 21.2275C1.20598 20.9163 0.980023 20.5066 0.895036 20.0581C0.810049 19.6095 0.870471 19.1456 1.0675 18.7337C1.75875 17.1412 2.9925 17.6312 3.5875 17.8587C4.03481 18.0756 4.52543 18.1882 5.0225 18.1882C5.51958 18.1882 6.0102 18.0756 6.4575 17.8587C7.5775 17.4037 8.28625 15.9775 9.03 14.4725C10.0713 12.3725 11.2438 10.0012 13.9563 9.65125C15.3626 8.25676 17.2292 7.423 19.2063 7.30625V7.30625C20.0895 7.33202 20.9576 7.54228 21.7548 7.92353C22.5519 8.30479 23.2605 8.84859 23.835 9.52C24.6925 9.8525 27.125 11.2088 27.125 15.2688ZM25.375 15.2688C25.375 11.8475 23.2138 11.13 23.1263 11.1037L22.8988 11.0337L22.75 10.85C22.3289 10.3181 21.7985 9.88266 21.1947 9.57321C20.5909 9.26377 19.9278 9.08748 19.25 9.05625V9.05625C18.2771 9.09262 17.3328 9.39527 16.52 9.93125C17.0118 10.0686 17.4872 10.2593 17.9375 10.5L17.0625 12.0225C16.2615 11.5721 15.3564 11.3397 14.4375 11.3488C12.6875 11.4713 11.8125 12.8975 10.6488 15.225C9.77375 16.975 8.89875 18.725 7.14875 19.4512C6.49373 19.7505 5.78201 19.9053 5.06188 19.9053C4.34175 19.9053 3.63003 19.7505 2.975 19.4512L2.72125 19.355V19.3988C2.6075 19.6613 2.6075 19.6612 2.94875 20.09C3.41983 20.6422 3.80077 21.2653 4.0775 21.9362C4.29569 22.5651 4.36752 23.2354 4.2875 23.8962C4.2875 24.0625 4.2875 24.29 4.2875 24.4212C4.63828 24.0405 4.96001 23.6339 5.25 23.205C7.18375 20.195 10.3775 20.58 14.875 22.1113C19.81 23.8175 21.1838 20.4663 21.245 20.3613C21.3879 20.0479 21.4662 19.709 21.4752 19.3647C21.4842 19.0205 21.4238 18.6779 21.2975 18.3575L22.8725 17.5C23.1019 18.0092 23.224 18.5603 23.2313 19.1188C23.8889 18.7149 24.4315 18.1486 24.807 17.4743C25.1824 16.8 25.378 16.0405 25.375 15.2688V15.2688Z" /></svg>;

export default FriedChicken;