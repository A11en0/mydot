import qbs 1.0
import '../QtModule.qbs' as QtModule

QtModule {
    qtModuleName: "Charts"
    Depends { name: "Qt"; submodules: ["core", "gui", "widgets"]}

    architectures: ["x86_64"]
    targetPlatform: "linux"
    hasLibrary: true
    staticLibsDebug: []
    staticLibsRelease: []
    dynamicLibsDebug: []
    dynamicLibsRelease: []
    linkerFlagsDebug: []
    linkerFlagsRelease: []
    frameworksDebug: []
    frameworksRelease: []
    frameworkPathsDebug: []
    frameworkPathsRelease: []
    libNameForLinkerDebug: "Qt5Charts"
    libNameForLinkerRelease: "Qt5Charts"
    libFilePathDebug: ""
    libFilePathRelease: "/home/allen/.anaconda3/lib/libQt5Charts.so.5.9.6"
    cpp.defines: ["QT_CHARTS_LIB"]
    cpp.includePaths: ["/home/allen/.anaconda3/include/qt", "/home/allen/.anaconda3/include/qt/QtCharts"]
    cpp.libraryPaths: ["/home/allen/.anaconda3/lib", "/home/allen/.anaconda3/lib"]
    Group {
        files: [Qt["charts"].libFilePath]
        filesAreTargets: true
        fileTags: ["dynamiclibrary"]
    }
}