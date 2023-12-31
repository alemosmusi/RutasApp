#import "AppDelegate.h"

#import <GoogleMaps/GoogleMaps.h>

#import <React/RCTBundleURLProvider.h>

//#import "RNSplashScreen.h"  // here

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{



  [GMSServices provideAPIKey:@"AIzaSyCjGAcv-k70UBhauN7V-fUYgPLozrnLdVY"]; // add this line using the api key obtained from Google Console

  self.moduleName = @"RutasApp";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};



  //[RNSplashScreen show];  // here



  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
