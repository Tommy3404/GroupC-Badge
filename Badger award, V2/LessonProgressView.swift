//
//  LessonProgressView.swift
//  Badger award, V2
//
//  Created by Zachary Clayville on 5/6/25.
//

import SwiftUI

struct LessonProgressView: View {
    var body: some View {
        VStack(spacing: 40) {
            LessonBox(title: "Lesson 1", progress: "Progress: 0%")
            Image(systemName: "arrow.down")
                .font(.title)
            LessonBox(title: "Lesson 2", locked: true)
            Image(systemName: "arrow.down")
                .font(.title)
            LessonBox(title: "Lesson 3", locked: true)
        }
        .padding()
    }
}

struct LessonBox: View {
    var title: String
    var progress: String? = nil
    var locked: Bool = false

    var body: some View {
        VStack {
            Text(title)
                .font(.headline)
                .foregroundColor(.white)

            if let progress = progress {
                Text(progress)
                    .font(.subheadline)
                    .foregroundColor(.white)
            }

            if locked {
                Image(systemName: "lock.fill")
                    .foregroundColor(.white)
            }
        }
        .frame(width: 200, height: 80)
        .background(Color.blue)
        .cornerRadius(10)
    }
}

#Preview {
    LessonProgressView()
}
